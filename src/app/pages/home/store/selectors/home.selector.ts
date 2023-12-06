import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as homeStore from '../reducers/home-store.reducer';

export const selectMoveStoreState =
  createFeatureSelector<homeStore.HomeStoreState>(
    homeStore.homeStoreFeatureKey
  );

export const selectListMovies = createSelector(
  selectMoveStoreState,
  (state: homeStore.HomeStoreState) =>
    state.homeStore.listMovies
);
