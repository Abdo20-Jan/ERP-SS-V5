import { InvalidNcmError } from "../common/errors";

export type NcmSource = "MANUAL" | "SUGGESTED" | "IMPORTED";

const NCM_RE = /^\d{4}\.\d{2}\.\d{2}$/;

export interface NcmCodeProps {
  code: string;
  description: string;
  source?: NcmSource;
  confidence?: number;
}

export class NcmCode {
  readonly code: string;
  readonly description: string;
  readonly source: NcmSource;
  readonly confidence?: number;

  constructor(props: NcmCodeProps) {
    const code = props.code?.trim() ?? "";
    if (!code) {
      throw new InvalidNcmError("NCM code is required");
    }
    if (!NCM_RE.test(code)) {
      throw new InvalidNcmError(
        `NCM must follow format XXXX.XX.XX, got '${props.code}'`,
        { code: props.code },
      );
    }
    if (!props.description?.trim()) {
      throw new InvalidNcmError("NCM description is required");
    }
    this.code = code;
    this.description = props.description.trim();
    this.source = props.source ?? "MANUAL";
    this.confidence = props.confidence;
  }

  toJSON(): {
    code: string;
    description: string;
    source: NcmSource;
    confidence?: number;
  } {
    return {
      code: this.code,
      description: this.description,
      source: this.source,
      ...(this.confidence !== undefined ? { confidence: this.confidence } : {}),
    };
  }
}
