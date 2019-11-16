import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms';


  user = {
    name: '',
    email: '',
    gender: '',
    NodeJS: '',
    JavaScript: '',
    Angular: '',
    position: ''
  }

  ;

  sendForm(registerForm: NgForm) {
    console.log(registerForm);
  }
}
