import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as HomeActions from '../actions/home.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../../../../services/movie.service';
import { Movie } from '../../../../components/models/movie.model';

@Injectable()
export class HomeEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.loadMovies),
            switchMap(() =>
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

    selectMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.loadMovie),
            switchMap((action) =>
                from(this.movieService.getMovie(action.request)).pipe(
                    map((response: any) => {
                        return HomeActions.loadMovieSuccess({ response });
                    }),
                    catchError(() => {
                        return of(HomeActions.addMovieFail());
                    })
                )
            )
        )
    );

    searchMovie$ = createEffect(() =>
    this.actions$.pipe(
        ofType(HomeActions.searchMovies),
        switchMap((action) =>
            from(this.movieService.filterMovie(action.request)).pipe(
                map((response:any) => {
                    return HomeActions.searchMoviesSuccess({ response });
                }),
                catchError(() => {
                    return of(HomeActions.searchMoviesFail());
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

