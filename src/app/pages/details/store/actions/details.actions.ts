import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../../components/models/movie.model';


export const clearStoreFlags = createAction('[Movie] Clear Store Flags');

export const clearMovies = createAction('[Movie] Clear Movies');

export const loadMovie = createAction(
  '[Movie] Load Movie',
  props<{ request: string }>()
);
export const loadMovieSuccess = createAction(
  '[Movie] Load Movie Success',
  props<{ response: Movie }>()
);
export const loadMovieFail = createAction('[Movie] Load Movie Fail');
