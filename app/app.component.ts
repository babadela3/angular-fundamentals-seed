import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }} {{number1 + number2 }}
    </div>
    <div>
      {{ isHappy ? ':)' : ':(' }}
    </div>
  `
})
export class AppComponent {
  title: string;
  number1: number = 1;
  number2: number = 2;
  isHappy: boolean = false;

  constructor() {
    this.title = "Title"
  }
}
