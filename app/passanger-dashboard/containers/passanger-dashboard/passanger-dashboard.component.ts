import { Component, OnInit } from '@angular/core';
import { Passanger } from './../models/passanger.interface';

@Component({
    selector:'passanger-dashboard',
    styleUrls: ['passanger-dashboard.component.scss'],
    template: `
        <div class="app">
            <passanger-count 
                [items]="passangers">
            </passanger-count>
            <h1>Airline passagers {{ passangers.length }}</h1>
            <passanger-detail
                *ngFor="let passanger of passangers"
                [detail]="passanger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)">
            </passanger-detail>
        </div>
        `
}) 
export class PassangerDashboardComponent implements OnInit{
    passangers: Passanger[]; 
    ngOnInit() {
        this.passangers = [
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

    handleEdit(event){
        console.log(event);
    }

    handleRemove(event){
        console.log(event);
    }
}