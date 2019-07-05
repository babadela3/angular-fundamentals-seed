import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './containers/components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './containers/components/passanger-detail/passanger-detail.component';
import { PassangerViewerComponent } from './containers/components/passanger-viewer/passanger-viewer.component';
import { PassangerFormComponent } from './containers/components/passanger-form/passanger-form.component';

import { PassangerDashboardService } from './passanger-dashboard.service'

const routes: Routes = [
    {
        path: "passangers", 
        children: [
            { path: "", component: PassangerCountComponent },
            { path: ":id", component: PassangerViewerComponent }
        ]
    },
    
]

@NgModule({
    declarations: [
        PassangerDashboardComponent,
        PassangerCountComponent,
        PassangerDetailComponent,
        PassangerViewerComponent,
        PassangerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
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