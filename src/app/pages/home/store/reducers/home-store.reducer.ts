import { combineReducers } from '@ngrx/store';

//Reducers
import { homeReducer, HomeState } from './home.reducer';


export const homeStoreFeatureKey = 'HomeStore';

export type HomeStoreState = {
  homeStore: HomeState
};

export const homeStoreReducer = combineReducers<HomeStoreState>({
  homeStore: homeReducer
});
