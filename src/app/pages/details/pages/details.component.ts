import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DetailsStoreState } from '../store/reducers/details-store.reducer';
import * as homeActions from '../store/actions/details.actions';
import * as homeSelector from '../store/selectors/details.selector';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { Movie } from '../../../components/models/movie.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public ngDestroyed$ = new Subject();
  public selectdMovie: any;

  constructor(
    private homeStore: Store<DetailsStoreState>,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnDestroy() {
    this.homeStore.dispatch(homeActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((resp: any) =>{
      let title = resp.params.title;
      if(title != undefined || title != null){
        this.homeStore.dispatch(homeActions.loadMovie({request: title}));
      }
    })
    this.storeSubscription();
  }

  private storeSubscription(){
    this.homeStore
      .select(homeSelector.selectMovie)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.selectdMovie = response;
        }
      })
  }

}
