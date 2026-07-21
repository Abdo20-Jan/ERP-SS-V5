import { PartyValidationError } from "../common/errors";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactProps {
  name: string;
  position?: string | null;
  email: string;
  phone?: string | null;
  isPrimary?: boolean;
}

export class Contact {
  readonly name: string;
  readonly position: string | null;
  readonly email: string;
  readonly phone: string | null;
  readonly isPrimary: boolean;

  constructor(props: ContactProps) {
    if (!props.name?.trim()) {
      throw new PartyValidationError("Contact name is required");
    }
    const email = props.email?.trim() ?? "";
    if (!email || !EMAIL_RE.test(email)) {
      throw new PartyValidationError(`Invalid contact email: ${props.email}`, {
        email: props.email,
      });
    }

    this.name = props.name.trim();
    this.position = props.position?.trim() || null;
    this.email = email.toLowerCase();
    this.phone = props.phone?.trim() || null;
    this.isPrimary = props.isPrimary ?? false;
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      position: this.position,
      email: this.email,
      phone: this.phone,
      isPrimary: this.isPrimary,
    };
  }
}
