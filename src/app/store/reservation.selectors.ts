import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReservationState } from './reservation.reducers';

export const selectReservationState = createFeatureSelector<ReservationState>('reservation');

export const selectReservation = createSelector(
  selectReservationState,
  (state) => state.data
);