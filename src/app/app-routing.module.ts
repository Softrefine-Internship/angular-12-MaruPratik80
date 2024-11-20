import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './candidate/candidate.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { HireComponent } from './hire/hire.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: '', redirectTo: '/permissions', pathMatch: 'full' },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'job', component: JobComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'hire', component: HireComponent },
  { path: 'department', component: DepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
