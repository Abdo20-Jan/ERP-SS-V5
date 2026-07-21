export interface CreateDimensionCommand {
  id?: string;
  type: string;
  code: string;
  name: string;
  description?: string | null;
  parentId?: string | null;
  /** When parentId set, service supplies parent type for hierarchy check. */
  parentType?: string | null;
  parentExists?: boolean;
}

export interface UpdateDimensionCommand {
  name?: string;
  description?: string | null;
}

export interface DeactivateDimensionCommand {
  id: string;
}

export interface SetRestrictionCommand {
  accountId: string;
  dimensionId: string;
  restriction: string;
}
