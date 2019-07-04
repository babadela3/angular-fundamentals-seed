import { Component } from '@angular/core';

interface Passanger {
  id: number,
  name: string,
  checkIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>Airline passagers {{ passangers.length }}</h1>
      <ul>
        <li *ngFor="let passanger of passangers; let i = index;">
          <span 
            class="status"
            [class.check-in]="passanger.checkIn">
          </span>
          {{ i }} {{ passanger.name }}
        </li>
      </ul>

      <h1>Airline passagers {{ passangers.length }}</h1>
      <ul>
        <li *ngFor="let passanger of passangers; let i = index;">
          <span 
            class="status"
            [ngClass]="{
              'check-in': passanger.checkIn,
              'check-out': !passanger.checkIn
            }">
          </span>
          {{ i }} {{ passanger.name }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passangers: Passanger[] = [
    {
      id: 1,
      name: "Andrew",
      checkIn: true
    },
    {
      id: 2,
      name: "Robert",
      checkIn: false
    },
    {
      id: 3,
      name: "Bob",
      checkIn: true
    },
    {
      id: 4,
      name: "Tom",
      checkIn: false
    }
  ]
}
