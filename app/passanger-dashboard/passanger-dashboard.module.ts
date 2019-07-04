import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './containers/components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './containers/components/passanger-detail/passanger-detail.component';

@NgModule({
    declarations: [
        PassangerDashboardComponent,
        PassangerCountComponent,
        PassangerDetailComponent
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