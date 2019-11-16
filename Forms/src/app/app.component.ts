import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms';
  reactiveForm: FormGroup;

  user = {
    name: '',
    email: '',
    gender: '',
    NodeJS: '',
    JavaScript: '',
    Angular: '',
    position: ''
  };
  constructor(private formBuilder: FormBuilder) {
    this.createForm();

  }
  exeptionName = 'Pleace type your name';
  exeptionEmail = 'Email example: example@domain.com';

  sendForm(registerForm: NgForm) {
    console.log(registerForm);
  }


  private createForm() {
    this.reactiveForm = this.formBuilder.group(
      {
          name: '',
          email: '',
          gender: '',
          NodeJS: '',
          JavaScript: '',
          Angular: '',
          position: ''
    });
  }
}
