import { Component, OnInit, ViewChild } from '@angular/core';
import { PermissionService } from './permission.service';
import { Permission, SubPermission } from './permission.model';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  permissionsData!: Permission[];
  allSelected = false;

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.permissionsData = this.permissionService.permissionData;
    this.permissionService.disableSubPermission();
    this.allSelected = this.permissionService.allSelected;
  }

  onToggle(event: MouseEvent) {
    event.stopPropagation();
  }
  togglePermission(permission: Permission | SubPermission, value: boolean = permission.value) {
    if (permission.permissions)
      permission.permissions.forEach(subPermission => {
        if (!subPermission.isDisable) subPermission.value = value;
        if (subPermission.permissions) this.togglePermission(subPermission, value);
      });
  }

  onSetDefault() {
    this.permissionService.setDefault();
    this.allSelected = this.permissionService.allSelected;
  }

  onToggleAll() {
    this.permissionService.allSelected = !this.permissionService.allSelected;
    this.allSelected = this.permissionService.allSelected;
    this.permissionsData.forEach(permission => {
      if (!permission.isDisable) permission.value = this.allSelected;
      this.togglePermission(permission, this.allSelected);
    });
  }
}
