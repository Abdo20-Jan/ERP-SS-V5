export enum DocumentType {
  CUIT = "CUIT",
  CUIL = "CUIL",
  DNI = "DNI",
  CDI = "CDI",
  RUC = "RUC",
  OTHER = "OTHER",
}

export function isDocumentType(value: string): value is DocumentType {
  return Object.values(DocumentType).includes(value as DocumentType);
}
