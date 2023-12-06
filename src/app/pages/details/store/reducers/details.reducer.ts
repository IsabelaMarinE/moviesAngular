import { Action, createReducer, on } from '@ngrx/store';
import * as DetailsActions from '../actions/details.actions';
import { listMovies } from '../../interfaces/details.interface';
import { Movie } from '../../../../components/models/movie.model';


export const detailsFetureKey = 'details';

export interface DetailsState {
    listMovies: listMovies | undefined;
    movie: Movie | undefined;
}

export const initialDetailsState: DetailsState = {
  listMovies: undefined,
  movie: undefined,
};

export const detailsReducer = createReducer(
    initialDetailsState,
    on(DetailsActions.clearStoreFlags, (state: DetailsState) => ({
        ...state,
        listMovies: undefined,
    })),
    // Get One Movie
    on(DetailsActions.loadMovie, (state: DetailsState) => ({
        ...state,
        movie: undefined
    })),
    on(DetailsActions.loadMovieSuccess, (state: DetailsState, { response }) => ({
        ...state,
        movie: response
    })),
    on(DetailsActions.loadMovieFail, (state: DetailsState) => ({
        ...state,
        movie: undefined
    }))
);

export function detailsReducerFunc(
    state: DetailsState | undefined,
    action: Action
): any {
    return detailsReducerFunc(state, action);
}

