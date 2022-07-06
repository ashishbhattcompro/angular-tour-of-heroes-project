import { AbstractControl, ValidationErrors } from "@angular/forms"

export const usernameValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let msg = "";

  if (value) {
    const matches = value.match(/^[a-zA-Z]+$/);
    return matches ? null : { 'invalidName': true };
  } else {
    return null;
  }
}