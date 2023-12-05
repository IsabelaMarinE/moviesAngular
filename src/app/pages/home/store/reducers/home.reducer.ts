import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { listMovies } from '../../interfaces/home.interface';
import { Movie } from '../../../../components/models/movie.model';


export const homeFetureKey = 'home';

export interface HomeState {
    listMovies: listMovies | undefined;
    movie: Movie | undefined;
    listMoviesFavorite: listMovies | undefined;
    addMovie: listMovies | undefined;
    removeMovie: listMovies | undefined;
    filterMovies: listMovies | undefined;
}

export const initialHomeState: HomeState = {
  listMovies: undefined,
  movie: undefined,
  listMoviesFavorite: undefined,
  addMovie: undefined,
  removeMovie: undefined,
  filterMovies: undefined
};

export const homeReducer = createReducer(
    initialHomeState,
    on(HomeActions.clearStoreFlags, (state: HomeState) => ({
        ...state,
        listMovies: undefined,
        listMoviesFavorite: undefined,
        movie: undefined,
        addMovie: undefined,
        removeMovie: undefined,
        filterMovies: undefined
    })),
    on(HomeActions.loadMovies, (state: HomeState) => ({
        ...state,
        listMovies: undefined,
    })),
    on(
      HomeActions.loadMoviesSuccess,
        (state: HomeState, { response }) => ({
            ...state,
            listMovies: response,
        })
    ),
    on(HomeActions.loadMoviesFail, (state: HomeState) => ({
        ...state,
        listMovies: undefined,
    })),
    // Get One Movie
    on(HomeActions.loadMovie, (state: HomeState) => ({
        ...state,
        movie: undefined
    })),
    on(HomeActions.loadMovieSuccess, (state: HomeState, { response }) => ({
        ...state,
        movie: response
    })),
    on(HomeActions.loadMovieFail, (state: HomeState) => ({
        ...state,
        movie: undefined
    })),
    // Add Favorite Movie
    on(HomeActions.addMovie, (state: HomeState) => ({
        ...state,
        listMoviesFavorite: undefined
    })),
    on(HomeActions.addMovieSuccess, (state: HomeState, { response }) => ({
        ...state,
        listMoviesFavorite: response
    })),
    on(HomeActions.addMovieFail, (state: HomeState) => ({
        ...state,
        listMoviesFavorite: undefined
    })),

    // Remove Move of Favorite
    on(HomeActions.removeMovie, (state: HomeState) => ({
        ...state,
        listMoviesFavorite: undefined
    })),
    on(HomeActions.removeMovieSuccess, (state: HomeState, { response }) => ({
        ...state,
        listMoviesFavorite: response
    })),
    on(HomeActions.removeMovieFail, (state: HomeState) => ({
        ...state,
        listMoviesFavorite: undefined
    }))
);

export function homeReducerFunc(
    state: HomeState | undefined,
    action: Action
): any {
    return homeReducerFunc(state, action);
}

