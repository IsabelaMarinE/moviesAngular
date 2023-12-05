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

export const loadMovie = createAction(
  '[Movie] Load Movie',
  props<{ request: string }>()
);
export const loadMovieSuccess = createAction(
  '[Movie] Load Movie Success',
  props<{ response: Movie }>()
);
export const loadMovieFail = createAction('[Movie] Load Movie Fail');

export const addMovie = createAction(
  '[Movie] add Movie',
  props<{ request: Movie }>()
);
export const addMovieSuccess = createAction(
  '[Movie] add Movie Success',
  props<{ response: listMovies}>()
);
export const addMovieFail = createAction('[Movie] Load Movie Fail');

export const removeMovie = createAction(
  '[Movie] remove Movie',
  props<{ request: Movie }>()
);
export const removeMovieSuccess = createAction(
  '[Movie] remove Movie Success',
  props<{ response: listMovies }>()
);
export const removeMovieFail = createAction('[Movie] Load Movie Fail');

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{ request: string }>()
);
export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success',
  props<{ response: any[] }>()
);
export const searchMoviesFail = createAction('[Movie] Search Movies Fail');
