import { Component, OnInit, ViewChild } from '@angular/core';
import { PermissionService } from './permission.service';
import { MatAccordion } from '@angular/material/expansion';
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
  }

  onToggle(event: MouseEvent) {
    event.stopPropagation();
  }
  togglePermission(permission: Permission | SubPermission) {
    if (permission.permissions)
      permission.permissions.forEach(subPermission => {
        if (!subPermission.isDisable) subPermission.value = permission.value;
        if (subPermission.permissions) this.togglePermission(subPermission);
      });
  }

  onSetDefault() {
    this.permissionService.setDefault();
  }

  onToggleAll() {
    this.allSelected = !this.allSelected;
    this.permissionsData.forEach(permission => {
      permission.value = this.allSelected;
      this.togglePermission(permission);
    });
  }
}
