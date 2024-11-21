import { Component, OnInit } from '@angular/core';
import { Permission, SubPermission } from '../permissions/permission.model';
import { PermissionService } from '../permissions/permission.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  module!: Permission;
  permissions!: SubPermission[];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.module = this.permissionService.permissionData.find(permission => permission.name === 'Reports')!;
    this.permissions = this.module.permissions;
  }
}
