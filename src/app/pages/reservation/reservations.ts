import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbTimepickerModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationForm } from '../../components/reservation-form/reservation-form';

@Component({
  selector: 'app-reservations',
  imports: [
    ReservationForm,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ],
  templateUrl: './reservations.html',
  styleUrl: './reservations.scss'
})
export class Reservations {}