export interface Permission {
  name: string;
  value: boolean;
  isDisable: boolean;
  permissions: SubPermission[];
}

export interface SubPermission {
  name: string;
  value: boolean;
  isDisable: boolean;
  permissions?: SubPermission[];
}
