import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './candidate/candidate.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { HireComponent } from './hire/hire.component';
import { DepartmentComponent } from './department/department.component';
import { PermissionGuard } from './permissions/permission.guard';

const routes: Routes = [
  { path: '', redirectTo: '/permissions', pathMatch: 'full' },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'job', component: JobComponent, canActivate: [PermissionGuard] },
  {
    path: 'candidate',
    component: CandidateComponent,
    canActivate: [PermissionGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [PermissionGuard],
  },
  { path: 'reports', component: ReportsComponent, canActivate: [PermissionGuard] },
  { path: 'hire', component: HireComponent, canActivate: [PermissionGuard] },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [PermissionGuard],
  },
  { path: '**', redirectTo: '/permissions' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
