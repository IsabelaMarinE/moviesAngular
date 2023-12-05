import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as HomeActions from '../actions/home.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../../../../services/movie.service';


@Injectable()
export class HomeEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.loadMovies),
            switchMap((action) =>
                from(this.movieService.getMoviesList()).pipe(
                    map((response) => {
                        return HomeActions.loadMoviesSuccess({ response });
                    }),
                    catchError(() => {
                        return of(HomeActions.loadMoviesFail());
                    })
                )
            )
        )
    );

    addFavoriteMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.addMovie),
            switchMap((action) =>
                from(this.movieService.addToFavorites(action.request)).pipe(
                    map((response) => {
                        return HomeActions.addMovieSuccess({ response });
                    }),
                    catchError(() => {
                        return of(HomeActions.addMovieFail());
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

