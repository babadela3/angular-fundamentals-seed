import { Component } from '@angular/core';

interface Passanger {
  id: number,
  name: string,
  checkIn: boolean,
  checkInDate?: number
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
          <div>
            Check-in date: {{ passanger.checkIn ? (passanger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <p>{{passanger | json}}</p>
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
      checkIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 2,
      name: "Robert",
      checkIn: false,
      checkInDate: null
    },
    {
      id: 3,
      name: "Bob",
      checkIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 4,
      name: "Tom",
      checkIn: false,
      checkInDate: null
    }
  ]
}
