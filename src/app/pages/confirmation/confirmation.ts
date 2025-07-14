import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ReservationFacade } from '../../store/reservation.facade';
import { Reservation } from '../../models/reservation.model';
import { ReservationReceipt } from '../../components/reservation-receipt/reservation-receipt';


@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, ReservationReceipt],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.scss'
})
export class Confirmation {
  reservation$!: Observable<Reservation>;
  private router = inject(Router);
  private reservationFacade = inject(ReservationFacade);

  constructor() {
    this.reservation$ = this.reservationFacade.reservation$;
  }

  resetAndNavigateToReservation() {
    this.reservationFacade.clearReservation();
    this.router.navigate(['/reserve']);
  }

  resetAndNavigateToHome() {
    this.reservationFacade.clearReservation();
    this.router.navigate(['/']);
  }
}