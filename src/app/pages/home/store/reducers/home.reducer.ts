import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { listMovies } from '../../interfaces/home.interface';
import { Movie } from '../../../../components/models/movie.model';


export const homeFetureKey = 'home';

export interface HomeState {
    listMovies: listMovies | undefined;
    movie: Movie | undefined;
}

export const initialHomeState: HomeState = {
  listMovies: undefined,
  movie: undefined,
};

export const homeReducer = createReducer(
    initialHomeState,
    on(HomeActions.clearStoreFlags, (state: HomeState) => ({
        ...state,
        listMovies: undefined,
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
);

export function homeReducerFunc(
    state: HomeState | undefined,
    action: Action
): any {
    return homeReducerFunc(state, action);
}

