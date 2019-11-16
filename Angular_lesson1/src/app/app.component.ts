import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'university';
  counter = 0;
  name = '123';
  persons = [
    {name: 'Peter', age: 10},
    {name: 'Stephan', age: 20},
    {name: 'Mark', age: 15},
  ];

  get isCounterLessThen5() {
    return this.counter < 5;
  }

  constructor() {
    setTimeout(() => this.name = 'timeout', 3000);
  }

  onClickButton() {
    this.counter++;
  }
}
