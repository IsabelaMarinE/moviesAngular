import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { HomeStoreState } from '../store/reducers/home-store.reducer';
import * as homeActions from '../store/actions/home.actions';
import * as homeSelector from '../store/selectors/home.selector';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ngDestroyed$ = new Subject();
  public Movies: any = [];
  public CopyMovies: any = [];
  public favoritesMovies: any = [];
  public selectdMovie: any;
  public searchText: string = '';

  constructor(
    private homeStore: Store<HomeStoreState>,
    private route: Router
  ) {}

  public ngOnDestroy() {
    this.homeStore.dispatch(homeActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.homeStore.dispatch(homeActions.loadMovies());
    this.storeSubscription();
  }

  private storeSubscription(){
    this.homeStore
      .select(homeSelector.selectListMovies)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        this.Movies = response?.listMovies;
        this.CopyMovies = response?.listMovies;
      });
  }

  public addToFavorite(item:any){
    if(item){
      if(this.favoritesMovies.length == 0){
        this.favoritesMovies.push(item);
      }else {
        if(!this.favoritesMovies.find((movie:any) => movie.title == item.title)){
          this.favoritesMovies.push(item);
        }
      }
      sessionStorage.setItem('favorites',JSON.stringify(this.favoritesMovies))
    }
  }

  public filterMovies(){
    const search = this.searchText;
    if(!search || search?.trim().length === 0) {
      this.Movies = this.CopyMovies;
      return;
    }
    this.Movies = this.CopyMovies.filter((item:any) => {
       return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
  }

  public selectMovie(title: string){
    if(title != undefined || title != ''){
      this.route.navigate([`/details/${title}`])
    }
  }

}
