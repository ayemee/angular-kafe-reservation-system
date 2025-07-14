import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export function validReservationDate(control: AbstractControl): ValidationErrors | null {
  const date: NgbDateStruct = control.value;

  if (!date || typeof date.day !== 'number' || typeof date.month !== 'number') {
    return { invalidDate: true };
  }

  const isValid = date.month === 7 && date.day >= 24 && date.day <= 31;

  return isValid ? null : { invalidDate: true };
}