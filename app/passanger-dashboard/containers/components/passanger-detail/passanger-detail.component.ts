import { Component, Input } from '@angular/core';
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
        {{ i }} {{ detail.name }}
        <div>
            Check-in date: {{ detail.checkIn ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <div>
            Children : {{ detail.children?.length || 0 }}
        </div>
    </div>
    `
})
export class PassangerDetailComponent {
    @Input()
    detail: Passanger;
}