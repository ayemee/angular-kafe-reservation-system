import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NgbCalendar, NgbTimepickerModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { validReservationTime } from '../../validators/valid-time.validator';
import { validReservationDate } from '../../validators/valid-date-range.validator';
import { areaValidator } from '../../validators/area.validator'

import { ReservationFacade } from '../../store/reservation.facade';

import { Area } from '../../models/area.model';


@Component({
  selector: 'app-reservation-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.scss'
})

export class ReservationForm {
  areas: Area[] = [
    {
      name: 'Main Hall',
      capacity: 12,
      allowChildren: true,
      allowSmoking: false
    },
    {
      name: 'Bar',
      capacity: 4,
      allowChildren: false,
      allowSmoking: false
    },
    {
      name: 'Riverside',
      capacity: 8,
      allowChildren: true,
      allowSmoking: false
    },
    {
      name: 'Riverside (Smoking)',
      capacity: 6,
      allowChildren: false,
      allowSmoking: true
    }
  ];
  
  startDate = { year: 2025, month: 7 };
  minDate = { year: 2025, month: 7, day: 1 };

  form = inject(FormBuilder).group({
    date: ['', [Validators.required, validReservationDate]],
    time: ['', [Validators.required, validReservationTime]],
    partySize: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
    area: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-()\s]*$/)]],
    allowChildren: [false],
    allowSmoking: [false]
  }, {
    validators: areaValidator(this.areas)
  });

  constructor(
    private reservationFacade: ReservationFacade,
    private router: Router,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.minDate = this.calendar.getToday();
  }

  submit() {
    this.form.markAllAsTouched(); //trigger form validation

    if (this.form.valid) {
      this.reservationFacade.setReservation(this.form.value);
      this.router.navigate(['/confirmation']);
    }
  }
}