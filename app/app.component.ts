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
        (input)=handleChange($event.target.value)> 
      <div *ngIf="name.length > 2"> 
        Searching for ... {{ name }} 
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Name';
  title: string;

  handleChange(value: string){
    this.name = value;
  }

  constructor() {
    this.title = "Title"
  }
}
