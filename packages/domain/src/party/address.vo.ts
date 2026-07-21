import { PartyValidationError } from "../common/errors";

export enum AddressType {
  BILLING = "BILLING",
  DELIVERY = "DELIVERY",
  HEADQUARTERS = "HEADQUARTERS",
  LEGAL = "LEGAL",
}

export interface AddressProps {
  type: AddressType | string;
  street: string;
  streetNumber: string;
  complement?: string | null;
  neighborhood?: string | null;
  city: string;
  province: string;
  country?: string;
  postalCode: string;
  isPrimary?: boolean;
}

export class Address {
  readonly type: AddressType;
  readonly street: string;
  readonly streetNumber: string;
  readonly complement: string | null;
  readonly neighborhood: string | null;
  readonly city: string;
  readonly province: string;
  readonly country: string;
  readonly postalCode: string;
  readonly isPrimary: boolean;

  constructor(props: AddressProps) {
    if (!Object.values(AddressType).includes(props.type as AddressType)) {
      throw new PartyValidationError(`Invalid address type: ${props.type}`);
    }
    if (!props.street?.trim()) {
      throw new PartyValidationError("Address street is required");
    }
    if (!props.streetNumber?.trim()) {
      throw new PartyValidationError("Address streetNumber is required");
    }
    if (!props.city?.trim()) {
      throw new PartyValidationError("Address city is required");
    }
    if (!props.province?.trim()) {
      throw new PartyValidationError("Address province is required");
    }
    if (!props.postalCode?.trim()) {
      throw new PartyValidationError("Address postalCode is required");
    }

    this.type = props.type as AddressType;
    this.street = props.street.trim();
    this.streetNumber = props.streetNumber.trim();
    this.complement = props.complement?.trim() || null;
    this.neighborhood = props.neighborhood?.trim() || null;
    this.city = props.city.trim();
    this.province = props.province.trim();
    this.country = (props.country ?? "AR").trim() || "AR";
    this.postalCode = props.postalCode.trim();
    this.isPrimary = props.isPrimary ?? false;
  }

  toJSON(): Record<string, unknown> {
    return {
      type: this.type,
      street: this.street,
      streetNumber: this.streetNumber,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      province: this.province,
      country: this.country,
      postalCode: this.postalCode,
      isPrimary: this.isPrimary,
    };
  }
}
