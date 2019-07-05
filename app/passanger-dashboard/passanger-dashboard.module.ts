import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './containers/components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './containers/components/passanger-detail/passanger-detail.component';
import { PassangerViewerComponent } from './containers/components/passanger-viewer/passanger-viewer.component';

import { PassangerDashboardService } from './passanger-dashboard.service'

@NgModule({
    declarations: [
        PassangerDashboardComponent,
        PassangerCountComponent,
        PassangerDetailComponent,
        PassangerViewerComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        PassangerViewerComponent
    ],
    providers: [
        PassangerDashboardService
    ]
})
export class PassangerDashboardModule {

}