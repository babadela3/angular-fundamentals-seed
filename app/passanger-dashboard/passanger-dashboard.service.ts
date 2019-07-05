import { Http } from "@angular/http"; 
import { Injectable } from "@angular/core"

import { Passanger } from "./containers/models/passanger.interface";

@Injectable()
export class PassangerDashboardService {
    constructor(private http: Http) {
        console.log(http);
    }

    getPassanger(): Passanger[] {
        return [
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
        ];
    }
}