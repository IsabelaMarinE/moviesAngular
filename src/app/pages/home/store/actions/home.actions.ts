import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../../components/models/movie.model';
import { listMovies } from '../../interfaces/home.interface';


export const clearStoreFlags = createAction('[Movie] Clear Store Flags');

export const clearMovies = createAction('[Movie] Clear Movies');

export const loadMovies = createAction(
  '[Movie] Load Movies'
);
export const loadMoviesSuccess = createAction(
  '[Movie] Load Movies Success',
  props<{ response: listMovies }>()
);
export const loadMoviesFail = createAction('[Movie] Load Movies Fail');
