import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassangerDashboardModule } from './passanger-dashboard/passanger-dashboard.module';

import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassangerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ]
})
export class AppModule {}
