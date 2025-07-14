import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export function validReservationTime(control: AbstractControl): ValidationErrors | null {
  const time: NgbTimeStruct = control.value;
  if (!time || typeof time.hour !== 'number' || typeof time.minute !== 'number')
    return { invalidTime: true };

  const totalMinutes = time.hour * 60 + time.minute;
  const minMinutes = 18 * 60;
  const maxMinutes = 21 * 60 + 30;
  const isOnTheHourOrHalf = time.minute === 0 || time.minute === 30;

  if (totalMinutes < minMinutes || totalMinutes > maxMinutes || !isOnTheHourOrHalf) {
    return { invalidTime: true };
  }

  return null;
}