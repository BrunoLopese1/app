export interface Tag {
  id: number;
  name: string;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
  kanban: boolean;
  description: string;
  index: number;
}

export enum Action {
  CREATE = 'create',
  EDIT = 'edit',
}
