import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passanger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-detail',
    styleUrls: ['passanger-detail.component.scss'],
    template: `
    <div>
        <span 
            class="status"
            [class.check-in]="detail.checkIn">
        </span>
        <div *ngIf="editing">
            <input 
                type="text" 
                [value]="detail.name"
                (input)="onChangeName(name.value)"
                #name>
        </div>
        <div *ngIf="!editing">
            {{ i }} {{ detail.name }}
        </div>
        <div>
            Check-in date: {{ detail.checkIn ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <button (click)="checkEditing()">
            {{editing ? "Done" : "Edit"}}
        </button>
        <button (click)="clickRemove()">
            Remove
        </button>
        <button (click)="goToPassanger()">
            View
        </button>
    </div>
    `
})
export class PassangerDetailComponent {
    @Input()
    detail: Passanger;
    editing: boolean = false;

    @Output()
    remove: EventEmitter<any> = new EventEmitter;

    @Output()
    edit: EventEmitter<any> = new EventEmitter;

    @Output()
    view: EventEmitter<any> = new EventEmitter;

    onChangeName(value: string) {
        this.detail.name = value;
    }

    checkEditing() {
        this.edit.emit(this.detail);
        this.editing = !this.editing;
    }

    clickRemove() {
        this.remove.emit(this.detail);
    }

    goToPassanger() {
        this.view.emit(this.detail);
    }
}