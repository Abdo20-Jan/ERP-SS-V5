import { ProductValidationError } from "../common/errors";

export interface CertificationProps {
  certificateNumber: string;
  type: string;
  issuingBody: string;
  issueDate: string | Date;
  expiryDate: string | Date;
}

export class Certification {
  readonly certificateNumber: string;
  readonly type: string;
  readonly issuingBody: string;
  readonly issueDate: Date;
  readonly expiryDate: Date;

  constructor(props: CertificationProps) {
    if (!props.certificateNumber?.trim()) {
      throw new ProductValidationError("certificateNumber is required");
    }
    if (!props.type?.trim()) {
      throw new ProductValidationError("certification type is required");
    }
    if (!props.issuingBody?.trim()) {
      throw new ProductValidationError("issuingBody is required");
    }
    const issue =
      props.issueDate instanceof Date
        ? props.issueDate
        : new Date(props.issueDate);
    const expiry =
      props.expiryDate instanceof Date
        ? props.expiryDate
        : new Date(props.expiryDate);
    if (Number.isNaN(issue.getTime()) || Number.isNaN(expiry.getTime())) {
      throw new ProductValidationError("Invalid certification dates");
    }
    if (expiry.getTime() < issue.getTime()) {
      throw new ProductValidationError("expiryDate must be >= issueDate");
    }
    this.certificateNumber = props.certificateNumber.trim();
    this.type = props.type.trim();
    this.issuingBody = props.issuingBody.trim();
    this.issueDate = issue;
    this.expiryDate = expiry;
  }

  toJSON(): Record<string, unknown> {
    return {
      certificateNumber: this.certificateNumber,
      type: this.type,
      issuingBody: this.issuingBody,
      issueDate: this.issueDate.toISOString().slice(0, 10),
      expiryDate: this.expiryDate.toISOString().slice(0, 10),
    };
  }
}
