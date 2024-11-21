import { Component, OnInit } from '@angular/core';
import { Permission, SubPermission } from '../permissions/permission.model';
import { PermissionService } from '../permissions/permission.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  module!: Permission;
  permissions!: SubPermission[];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.module = this.permissionService.permissionData.find(permission => permission.name === 'Settings')!;
    this.permissions = this.module.permissions;
  }
}
