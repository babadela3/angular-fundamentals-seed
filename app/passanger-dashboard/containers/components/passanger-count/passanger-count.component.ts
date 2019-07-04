import { Component, Input } from '@angular/core';
import { Passanger } from './../../models/passanger.interface'; 

@Component({
    selector: 'passanger-count',
    template: `
    <div>
        Check-in passangers: {{ getCheckInPassangers() }} / {{ items.length }}
    </div>
    `

})
export class PassangerCountComponent {
    @Input()
    items: Passanger[];

    getCheckInPassangers() : number {
        if(!this.items) return;
        return this.items.filter((passanger : Passanger) => passanger.checkIn).length;
    }
}