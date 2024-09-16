export interface Tag {
  id?: number;
  name: string;
  color: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  kanban: boolean;
  description?: string;
  index?: number;
}

export enum ActionEnum {
  CREATE = "create",
  EDIT = "edit",
  DELETE = "delete",
}
