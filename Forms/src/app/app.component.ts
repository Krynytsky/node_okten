import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {debounce, debounceTime, delay, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms';
  reactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  private createForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        passwords: this.formBuilder.group(
          {
            password: '',
            confirmPassword: '',
          }, {validators: eqalityValidator}
        ),
        gender: 'Mail',
        nodejs: '',
        javaScript: '',
        angular: true,
        position: '',
        childCounter: 0,
      });
    this.reactiveForm.controls.name.valueChanges
      // unsubscribe ussing pipes
      .pipe(
        // map((value, index) => value.split('').pop())
        // debounceTime(3000)
        take(5)
      )
      .subscribe(value => {
        console.log(value);
      });
  }

  register() {
    console.log(this.reactiveForm.value);
  }
  clearForm() {
    this.reactiveForm.reset();
  }

  setValue() {
    this.reactiveForm.setValue({name: 'Yurii',
      email: 'qwert@gmail.com',
      passwords: {
          password: '123456',
          confirmPassword: '123456',
        },
      gender: 'Male',
      nodejs: 'true',
      javaScript: 'true',
      angular: 'true',
      position: 'SENIOR',
      childCounter: 25 ,
    });
  }
}

const eqalityValidator = (formGroup): ValidationErrors => {
  const passwordControlValue = formGroup.get('password').value;
  const confirmPasswordControlValue = formGroup.get('confirmPassword').value;

  if (passwordControlValue && confirmPasswordControlValue && passwordControlValue !== confirmPasswordControlValue) {
    return {passwordMismath: true };
  }
  return null;
};
