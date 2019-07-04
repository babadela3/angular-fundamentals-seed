import { Component } from '@angular/core';
import { Passanger } from './../models/passanger.interface';

@Component({
    selector:'passanger-dashboard',
    styleUrls: ['passanger-dashboard.component.scss'],
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
                    <div>
                        Children : {{ passanger.children?.length || 0 }}
                    </div>
                </li>
            </ul>
        </div>
        `
}) 
export class PassangerDashboardComponent {
    passangers: Passanger[] = [
        {
          id: 1,
          name: "Andrew",
          checkIn: true,
          checkInDate: 1490742000000,
          children: [{name: "Sally", age: 12}, {name: "Rick", age: 7}]
        },
        {
          id: 2,
          name: "Robert",
          checkIn: false,
          checkInDate: null,
          children: null
        },
        {
          id: 3,
          name: "Bob",
          checkIn: true,
          checkInDate: 1490742000000,
          children: null
        },
        {
          id: 4,
          name: "Tom",
          checkIn: false,
          checkInDate: null,
          children: [{name: "Mason", age: 2}]
        }
      ]
}