import { Component, OnInit } from '@angular/core';

import { PassangerDashboardService } from '../../../passanger-dashboard.service';
import { Passanger } from './../../models/passanger.interface';

@Component({
    selector: 'passanger-viewer',
    styleUrls: ['passanger-viewer.component.scss'],
    template: `
    <div>
        <passanger-form
            [detail]="passanger">
        </passanger-form>
    </div>
    `
})
export class PassangerViewerComponent implements OnInit {
    passanger: Passanger;
    constructor(private passangerService: PassangerDashboardService) {
    }
    ngOnInit() {
        this.passangerService.getPassanger(1)
            .then((data: Passanger) => this.passanger = data)
    }
}