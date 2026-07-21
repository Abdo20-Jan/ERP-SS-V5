import { PartyValidationError } from "../common/errors";

export enum IvaCondition {
  RI = "RI",
  MONOTRIBUTO = "MONOTRIBUTO",
  EXENTO = "EXENTO",
  CONSUMIDOR_FINAL = "CONSUMIDOR_FINAL",
}

export interface FiscalClassificationProps {
  ivaCondition: string;
  iibbCondition?: string | null;
  iibbNumber?: string | null;
  iibbProvince?: string | null;
  startOfActivities?: Date | string | null;
}

export class FiscalClassification {
  readonly ivaCondition: string;
  readonly iibbCondition: string | null;
  readonly iibbNumber: string | null;
  readonly iibbProvince: string | null;
  readonly startOfActivities: Date | null;

  constructor(props: FiscalClassificationProps) {
    if (!props.ivaCondition?.trim()) {
      throw new PartyValidationError("IVA condition is required");
    }
    const iva = props.ivaCondition.trim().toUpperCase();
    if (!Object.values(IvaCondition).includes(iva as IvaCondition)) {
      throw new PartyValidationError(`Invalid IVA condition: ${props.ivaCondition}`);
    }
    this.ivaCondition = iva;
    this.iibbCondition = props.iibbCondition?.trim() || null;
    this.iibbNumber = props.iibbNumber?.trim() || null;
    this.iibbProvince = props.iibbProvince?.trim() || null;

    if (props.startOfActivities == null || props.startOfActivities === "") {
      this.startOfActivities = null;
    } else {
      const d =
        props.startOfActivities instanceof Date
          ? props.startOfActivities
          : new Date(props.startOfActivities);
      if (Number.isNaN(d.getTime())) {
        throw new PartyValidationError("Invalid startOfActivities date");
      }
      this.startOfActivities = d;
    }
  }

  toJSON(): Record<string, unknown> {
    return {
      ivaCondition: this.ivaCondition,
      iibbCondition: this.iibbCondition,
      iibbNumber: this.iibbNumber,
      iibbProvince: this.iibbProvince,
      startOfActivities: this.startOfActivities
        ? this.startOfActivities.toISOString().slice(0, 10)
        : null,
    };
  }
}
