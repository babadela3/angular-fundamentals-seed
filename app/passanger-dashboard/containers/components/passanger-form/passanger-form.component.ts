import { Component, Input } from '@angular/core';

import { Passanger } from './../../models/passanger.interface';

@Component({
    selector: 'passanger-form',
    styleUrls: ['passanger-form.component.scss'],
    template: `
    <form #form="ngForm" nonvalidate>
        {{ detail | json }}
        <div>

            Passanger name:
            <input
                type="text"
                name="name"
                [ngModel]="detail?.name">
        </div>

        <div>
            Passanger id:
            <input
                type="number"
                name="id"
                [ngModel]="detail?.id">
        </div>

        <div>
            <input
                type="checkbox"
                name="checkIn"
                [ngModel]="detail?.checkIn"
                (ngModelChange)=verifyCheckIn($event)>
        </div>

        <div *ngIf="form.value.checkIn">
            Check in date:
            <input
                type="number"
                name="checkInDate"
                [ngModel]="detail?.checkInDate">
        </div>    

        {{form.value|json}}
    </form>    
    `
})
export class PassangerFormComponent {
    @Input()
    detail: Passanger;

    verifyCheckIn(checkedIn : boolean) {
        if(checkedIn) {
            this.detail.checkInDate = Date.now();
        } 
    }
}