import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { HomeStoreState } from '../store/reducers/home-store.reducer';
import * as homeActions from '../store/actions/home.actions';
import * as homeSelector from '../store/selectors/home.selector';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { Movie } from '../../../components/models/movie.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ngDestroyed$ = new Subject();
  public Movies: any = [];
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
      });

    this.homeStore
      .select(homeSelector.selectAddMovie)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Add to favorite List',
            text: 'Done'
          });
        }
      });

      this.homeStore
        .select(homeSelector.filterMovie)
        .pipe(takeUntil(this.ngDestroyed$))
        .subscribe((response) => {
          if(response){
            this.Movies = response;
          }
        })
  }

  public addToFavorite(item:any){
    let request;
    if(item){
      request = new Movie();
      request = _.merge(request, item);
      this.homeStore.dispatch(homeActions.addMovie({request}));
    }
  }

  public filterMovies(){
    if(this.searchText.length > 0){
      this.homeStore.dispatch(homeActions.searchMovies({request: this.searchText}));
    }
  }

}
