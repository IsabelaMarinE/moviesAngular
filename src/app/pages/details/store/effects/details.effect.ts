import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as HomeActions from '../actions/details.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../../../../services/movie.service';

@Injectable()
export class DetailsEffects {
  selectMovie$ = createEffect(() =>
      this.actions$.pipe(
          ofType(HomeActions.loadMovie),
          switchMap((action) =>
              from(this.movieService.getMovie(action.request)).pipe(
                  map((response: any) => {
                      return HomeActions.loadMovieSuccess({ response });
                  }),
                  catchError(() => {
                      return of(HomeActions.loadMovieFail());
                  })
              )
          )
      )
  );

  constructor(
      private actions$: Actions,
      private movieService: MovieService
  ) {
  }
}

