import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectReservation } from '../store/reservation.selectors';
import { map, take } from 'rxjs/operators';

export const hasReservationGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectReservation).pipe(
    take(1),
    map((reservation) => {
      if (reservation) {
        return true;
      } else {
        router.navigate(['/reserve']);
        return false;
      }
    })
  );
};