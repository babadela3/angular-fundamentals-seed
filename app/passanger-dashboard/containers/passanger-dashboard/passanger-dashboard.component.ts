import { Component, OnInit } from '@angular/core';
import { Passanger } from './../models/passanger.interface';
import { PassangerDashboardService} from './../../passanger-dashboard.service';

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
    constructor(private passangerService: PassangerDashboardService) {}
    ngOnInit() {
        this.passangers = this.passangerService.getPassanger();
    }

    handleEdit(event : Passanger){
        // this.passangers = this.passangers.map((passanger : Passanger) => {
        //     if(passanger.id === event.id) {
        //         passanger = Object.assign({}, passanger, event);
        //     }
        //     return passanger;
        // });
        console.log(this.passangers);
    }

    handleRemove(event: Passanger){
        this.passangers = this.passangers.filter((passanger : Passanger) => {
            return passanger.id !== event.id;
        })
    }
}