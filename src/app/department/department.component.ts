import { Component, OnInit } from '@angular/core';
import { Permission, SubPermission } from '../permissions/permission.model';
import { PermissionService } from '../permissions/permission.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  module!: Permission;
  permissions!: SubPermission[];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.module = this.permissionService.permissionData.find(permission => permission.name === 'Department')!;
    this.permissions = this.module.permissions;
  }
}
