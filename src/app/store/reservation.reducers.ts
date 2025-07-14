import { createReducer, on } from '@ngrx/store';
import { setReservation, clearReservation } from './reservation.actions';

export interface ReservationState {
  data: any | null;
}

export const initialState: ReservationState = {
  data: null
};

export const reservationReducer = createReducer(
  initialState,
  on(setReservation, (state, { data }) => ({ ...state, data })),
  on(clearReservation, () => initialState),
);