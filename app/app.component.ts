import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <input 
        type="text" 
        [value]="name"
        (input)=eventInput($event)>
      <div> {{ name }} </div>
      <button 
        (click)=eventClick()>
        Change name
      </button>
    </div>
  `
})
export class AppComponent {
  name: string = 'Name';
  title: string;

  eventClick(){
    this.name = "Name";
  }

  eventInput(event: any) {
    this.name = event.target.value;
  }

  constructor() {
    this.title = "Title"
  }
}
