export enum WarehouseType {
  NACIONAL = "NACIONAL",
  FISCAL = "FISCAL",
  TERCEIRIZADO = "TERCEIRIZADO",
  PROPRIO = "PROPRIO",
}

export function isWarehouseType(value: string): value is WarehouseType {
  return Object.values(WarehouseType).includes(value as WarehouseType);
}
