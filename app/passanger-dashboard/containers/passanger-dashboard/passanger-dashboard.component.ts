import { Component, OnInit } from '@angular/core';
import { Passanger } from './../models/passanger.interface';
import { PassangerDashboardService} from './../../passanger-dashboard.service';
import { Router } from '@angular/router';

@Component({
    selector:'passanger-dashboard',
    styleUrls: ['passanger-dashboard.component.scss'],
    template: `
        <div class="app">
            <passanger-count 
                [items]="passangers">
            </passanger-count>
            <h1>Airline passagers {{ passangers?.length }}</h1>
            <passanger-detail
                *ngFor="let passanger of passangers"
                [detail]="passanger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)"
                (view)="handleView($event)">
            </passanger-detail>
        </div>
        `
}) 
export class PassangerDashboardComponent implements OnInit{
    passangers: Passanger[]; 
    constructor(
        private router: Router,
        private passangerService: PassangerDashboardService) {}
    ngOnInit() {
        this.passangerService.getPassangers()
            .then((data: Passanger[]) => {
                console.log("Data:",data)
                this.passangers = data;
            });
    }

    handleEdit(event : Passanger){
        this.passangerService.updatePassanger(event)
            .subscribe((data: Passanger) => {
                console.log("Update");
            })
    }

    handleRemove(event: Passanger){
        this.passangerService.deletePassanger(event)
            .subscribe((data: Passanger) => {
                this.passangers = this.passangers.filter((passanger : Passanger) => {
                    return passanger.id !== event.id;
                })
            })   
    }

    handleView(event: Passanger){
        this.router.navigate(['/passangers', event.id]);
    }
}