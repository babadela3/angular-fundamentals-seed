import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passanger } from './../../models/passanger.interface';
import { Baggage } from './../../models/baggage.interface';

@Component({
    selector: 'passanger-form',
    styleUrls: ['passanger-form.component.scss'],
    template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" nonvalidate>
        {{ detail | json }}
        <div>

            Passanger name:
            <input
                type="text"
                name="name"
                required
                #name="ngModel"
                [ngModel]="detail?.name">
            <div *ngIf="name.errors?.required" class="error">
                Name is required
            </div>
        </div>

        <div>
            Passanger id:
            <input
                type="number"
                name="id"
                required
                #id="ngModel"
                [ngModel]="detail?.id">
                {{ id.errors | json }}
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
        
        <div>
            Luggage:
            <select
                name="baggage"
                [ngModel]="detail?.baggage">
                <option 
                    *ngFor="let item of baggage"
                    [value]="item.key"
                    [selected]="item.key === detail?.baggage">
                    {{ item.value }}
                </option>
            </select>
        </div>

        <button type="submit" [disabled]="form.invalid">
            Update
        </button>
    </form>    
    `
})
export class PassangerFormComponent {
    @Input()
    detail: Passanger;

    @Output()
    update: EventEmitter<Passanger> = new EventEmitter();

    baggage: Baggage[] = [
        {
            key: "none",
            value: "No baggage"
        },
        {
            key: "hand-only",
            value: "Hand and hold baggage"
        },
        {
            key: "hand-only",
            value: "Hand-only baggage"
        },
        {
            key: "hold-only",
            value: "Hold-only baggage"
        },
    ]

    verifyCheckIn(checkedIn : boolean) {
        if(checkedIn) {
            this.detail.checkInDate = Date.now();
        } 
    }

    handleSubmit(passanger: Passanger, isValid: boolean) {
        if(isValid) {
            this.update.emit(passanger);
        }
    }
}