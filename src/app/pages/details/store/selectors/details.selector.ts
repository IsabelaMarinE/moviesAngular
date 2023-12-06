import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as detailsStore from '../reducers/details-store.reducer';

export const selectMoveStoreState =
  createFeatureSelector<detailsStore.DetailsStoreState>(
    detailsStore.detailsStoreFeatureKey
  );

export const selectMovie = createSelector(
  selectMoveStoreState,
  (state: detailsStore.DetailsStoreState) =>
    state.detailsStore.movie
);
