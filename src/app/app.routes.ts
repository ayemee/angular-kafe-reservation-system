import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Reservations } from './pages/reservation/reservations';
import { Confirmation } from './pages/confirmation/confirmation';

import { hasReservationGuard } from './guards/has-reservation.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reserve', component: Reservations },
  { path: 'confirmation', component: Confirmation, canActivate: [hasReservationGuard]}
];
