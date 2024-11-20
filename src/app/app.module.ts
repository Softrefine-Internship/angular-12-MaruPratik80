import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './candidate/candidate.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { HireComponent } from './hire/hire.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent,
    JobComponent,
    CandidateComponent,
    SettingsComponent,
    ReportsComponent,
    HireComponent,
    DepartmentComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
