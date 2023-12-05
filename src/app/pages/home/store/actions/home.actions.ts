import { createAction, props } from '@ngrx/store';
import { listMovies } from '../../interfaces/home.interface';
import { Search } from '../../../../components/models/serach.model';
import { Movie } from '../../../../components/models/movie.model';


export const clearStoreFlags = createAction('[Movie] Clear Store Flags');

export const clearMovies = createAction('[Movie] Clear Movies');

export const loadMovies = createAction(
  '[Movie] Load Movies',
  props<{ request: Search }>()
);
export const loadMoviesSuccess = createAction(
  '[Movie] Load Movies Success',
  props<{ response: listMovies }>()
);
export const loadMoviesFail = createAction('[Movie] Load Movies Fail');

export const loadMovie = createAction(
  '[Movie] Load Movie',
  props<{ request: Search }>()
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
  props<{ response: listMovies }>()
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
