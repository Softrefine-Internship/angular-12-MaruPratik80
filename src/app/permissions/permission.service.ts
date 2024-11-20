import { Injectable } from '@angular/core';
import { Permission, SubPermission } from './permission.model';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  permissionDataDefaults: Permission[] = [
    {
      name: 'Job',
      value: true,
      isDisable: false,
      permissions: [
        {
          name: 'Add Job',
          value: true,
          isDisable: false,
        },
        {
          name: 'View Job',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Job Details',
              value: false,
              isDisable: false,
            },
            {
              name: 'View Applicants',
              value: true,
              isDisable: true,
            },
          ],
        },
        {
          name: 'Edit Job',
          value: false,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Candidate',
      value: true,
      isDisable: false,
      permissions: [
        {
          name: 'Add Candidate',
          value: false,
          isDisable: false,
        },
        {
          name: 'View Candidate',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Candidate Profile',
              value: true,
              isDisable: true,
            },
            {
              name: 'View Candidate History',
              value: false,
              isDisable: false,
            },
          ],
        },
        {
          name: 'Edit Candidate',
          value: true,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Settings',
      value: true,
      isDisable: true,
      permissions: [
        {
          name: 'Manage Settings',
          value: false,
          isDisable: true,
        },
        {
          name: 'View Logs',
          value: true,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Reports',
      value: false,
      isDisable: false,
      permissions: [
        {
          name: 'Generate Reports',
          value: true,
          isDisable: false,
        },
        {
          name: 'Export Reports',
          value: false,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Hire',
      value: false,
      isDisable: false,
      permissions: [
        {
          name: 'Create Job Opening',
          value: true,
          isDisable: false,
        },
        {
          name: 'Review Applications',
          value: false,
          isDisable: true,
        },
      ],
    },
    {
      name: 'Department',
      value: true,
      isDisable: true,
      permissions: [
        {
          name: 'View Departments',
          value: true,
          isDisable: false,
        },
        {
          name: 'Manage Departments',
          value: false,
          isDisable: true,
        },
      ],
    },
  ];

  permissionData!: Permission[];

  constructor() {
    this.permissionData = JSON.parse(JSON.stringify(this.permissionDataDefaults));
  }

  setDefault() {
    this.setDefaultValue(this.permissionData, this.permissionDataDefaults);
  }

  private setDefaultValue(
    permission: (Permission | SubPermission)[],
    defaultPermission: (Permission | SubPermission)[]
  ) {
    permission.forEach((permission, i) => {
      permission.value = defaultPermission[i].value;
      if (permission.permissions && defaultPermission[i].permissions)
        this.setDefaultValue(permission.permissions, defaultPermission[i].permissions!);
    });
  }
}
