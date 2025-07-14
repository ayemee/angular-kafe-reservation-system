import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

interface Area {
  name: string;
  capacity: number;
  allowChildren: boolean;
  allowSmoking: boolean;
}

export function areaValidator(areas: Area[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control.value;

    if (!form || !form.area || !form.partySize) {
      return null;
    }

    const selected = areas.find(a => a.name === form.area);
    if (!selected) return { invalidArea: true };

    const errors: any = {};

    if (form.partySize > selected.capacity) {
      errors.partyTooLarge = {
        allowed: selected.capacity,
        actual: form.partySize
      };
    }

    if (form.allowChildren && !selected.allowChildren) {
      errors.childrenNotAllowed = true;
    }

    if (form.allowSmoking && !selected.allowSmoking) {
      errors.smokingNotAllowed = true;
    }

    return Object.keys(errors).length ? errors : null;
  };
}
