import { Component, OnInit } from '@angular/core';
import { Permission, SubPermission } from '../permissions/permission.model';
import { PermissionService } from '../permissions/permission.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  module!: Permission;
  permissions!: SubPermission[];
  subPermissions?: SubPermission[];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.module = this.permissionService.permissionData.find(permission => permission.name === 'Job')!;
    this.permissions = this.module.permissions;
    this.permissions.forEach(permission => {
      if (permission.permissions) this.subPermissions = permission.permissions;
    });
  }
}
