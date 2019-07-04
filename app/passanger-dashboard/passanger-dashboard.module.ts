import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component'

@NgModule({
    declarations: [
        PassangerDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PassangerDashboardComponent
    ]
})
export class PassangerDashboardModule {

}