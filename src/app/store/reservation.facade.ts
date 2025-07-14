import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setReservation, clearReservation } from './reservation.actions';
import { selectReservation } from './reservation.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ReservationFacade {
  reservation$: Observable<any>;
  isReservationValid$: Observable<any>;

  constructor(private store: Store) {
    this.reservation$ = this.store.select(selectReservation);
    this.isReservationValid$ = this.reservation$.pipe(
      map(res => !!res?.date && !!res?.name)
    );
  }

  setReservation(data: any) {
    this.store.dispatch(setReservation({ data }));
  }

  clearReservation() {
    this.store.dispatch(clearReservation());
  }
}