import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../models/reservation.model';


@Component({
  selector: 'app-reservation-receipt',
  imports: [CommonModule],
  templateUrl: './reservation-receipt.html',
  styleUrl: './reservation-receipt.scss'
})
export class ReservationReceipt {
  @Input() reservationData!: Reservation;
}
