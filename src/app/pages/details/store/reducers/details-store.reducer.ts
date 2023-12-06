import { combineReducers } from '@ngrx/store';

//Reducers
import { detailsReducer, DetailsState } from './details.reducer';


export const detailsStoreFeatureKey = 'DetailsStore';

export type DetailsStoreState = {
  detailsStore: DetailsState
};

export const detailsStoreReducer = combineReducers<DetailsStoreState>({
  detailsStore: detailsReducer
});
