import { ProductValidationError } from "../common/errors";

export interface TireSpecsProps {
  width: number;
  profile: number;
  rimDiameter: number;
  loadIndex?: number | null;
  speedIndex?: string | null;
  tireType?: string | null;
  season?: string | null;
  dot?: string | null;
}

export class TireSpecifications {
  readonly width: number;
  readonly profile: number;
  readonly rimDiameter: number;
  readonly loadIndex: number | null;
  readonly speedIndex: string | null;
  readonly tireType: string | null;
  readonly season: string | null;
  readonly dot: string | null;

  constructor(props: TireSpecsProps) {
    if (!(props.width > 0)) {
      throw new ProductValidationError("Tire width must be positive");
    }
    if (!(props.profile > 0)) {
      throw new ProductValidationError("Tire profile must be positive");
    }
    if (!(props.rimDiameter > 0)) {
      throw new ProductValidationError("Tire rimDiameter must be positive");
    }
    if (props.dot != null && props.dot !== "") {
      const dot = props.dot.trim();
      if (dot.length < 10) {
        throw new ProductValidationError(
          "DOT must be at least 10 characters when present",
          { dot },
        );
      }
      this.dot = dot;
    } else {
      this.dot = null;
    }

    this.width = props.width;
    this.profile = props.profile;
    this.rimDiameter = props.rimDiameter;
    this.loadIndex = props.loadIndex ?? null;
    this.speedIndex = props.speedIndex?.trim() || null;
    this.tireType = props.tireType?.trim() || null;
    this.season = props.season?.trim() || null;
  }

  get measure(): string {
    const rim =
      Number.isInteger(this.rimDiameter)
        ? String(this.rimDiameter)
        : String(this.rimDiameter);
    return `${this.width}/${this.profile}R${rim}`;
  }

  get fullMeasure(): string {
    let m = this.measure;
    if (this.loadIndex != null) m += ` ${this.loadIndex}`;
    if (this.speedIndex) m += this.speedIndex;
    return m;
  }

  toJSON(): Record<string, unknown> {
    return {
      width: this.width,
      profile: this.profile,
      rimDiameter: this.rimDiameter,
      measure: this.measure,
      loadIndex: this.loadIndex,
      speedIndex: this.speedIndex,
      tireType: this.tireType,
      season: this.season,
      dot: this.dot,
    };
  }
}
