import { createAction, props } from '@ngrx/store';

export const setReservation = createAction(
  '[Reservation] Set',
  props<{ data: any }>()
);

export const clearReservation = createAction('[Reservation] Clear');