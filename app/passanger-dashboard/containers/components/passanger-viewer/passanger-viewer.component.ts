import { Component, OnInit } from '@angular/core';

import { PassangerDashboardService } from '../../../passanger-dashboard.service';
import { Passanger } from './../../models/passanger.interface';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passanger-viewer',
    styleUrls: ['passanger-viewer.component.scss'],
    template: `
    <div>
        <button (click)="goBack()">
            &lsaquo; Go back
        </button>
        <passanger-form
            [detail]="passanger"
            (update)="onUpdate($event)">
        </passanger-form>
    </div>
    `
})
export class PassangerViewerComponent implements OnInit {
    passanger: Passanger;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passangerService: PassangerDashboardService) {
    }
    ngOnInit() {
        this.route.params
            .switchMap((data: Passanger) => this.passangerService.getPassanger(data.id))
            .subscribe((data: Passanger) => this.passanger = data);
    }

    onUpdate(event: Passanger) {
        this.passangerService.updatePassanger(event)
            .subscribe((data: Passanger) => {
                this.passanger = Object.assign({},this.passanger, event);
            })
    }

    goBack() {
        this.router.navigate(['/passangers']);
    }
}