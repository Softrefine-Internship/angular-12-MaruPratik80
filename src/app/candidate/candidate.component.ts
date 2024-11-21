import { Component, OnInit } from '@angular/core';
import { Permission, SubPermission } from '../permissions/permission.model';
import { PermissionService } from '../permissions/permission.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  module!: Permission;
  permissions!: SubPermission[];
  subPermissions?: SubPermission[];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.module = this.permissionService.permissionData.find(permission => permission.name === 'Candidate')!;
    this.permissions = this.module.permissions;
    this.permissions.forEach(permission => {
      if (permission.permissions) this.subPermissions = permission.permissions;
    });
  }
}
