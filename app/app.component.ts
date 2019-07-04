import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <input type="text" #input> 
      <div> {{ name }} </div>
      <button 
        (click)=eventClick(input.value)>
        Change name
      </button>
    </div>
  `
})
export class AppComponent {
  name: string = 'Name';
  title: string;

  eventClick(value: string){
    this.name = value;
  }

  constructor() {
    this.title = "Title"
  }
}
