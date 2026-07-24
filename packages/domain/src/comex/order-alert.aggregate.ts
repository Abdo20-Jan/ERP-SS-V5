import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { OrderConcurrencyError } from "../common/errors";
import { AlertSeverity, AlertStatus } from "./international-order.enums";

export interface OrderAlertSnapshot {
  id: string;
  organizationId?: string;
  orderId: string;
  code: string;
  severity: string;
  message: string;
  status: string;
  acknowledgedBy: string | null;
  acknowledgedAt: string | null;
  resolvedBy: string | null;
  resolvedAt: string | null;
  resolutionReason: string | null;
  version?: number;
  createdAt: string;
}

export class OrderAlert {
  constructor(
    readonly id: EntityId,
    readonly orderId: string,
    readonly code: string,
    readonly severity: AlertSeverity,
    readonly message: string,
    private _status: AlertStatus,
    private _ackBy: string | null,
    private _ackAt: Date | null,
    private _resBy: string | null,
    private _resAt: Date | null,
    private _resR: string | null,
    readonly createdAt: Date,
    readonly organizationId: string = "org_001",
    private _version = 0,
  ) {}

  get status(): AlertStatus {
    return this._status;
  }

  get version(): number {
    return this._version;
  }

  static create(p: {
    orderId: string;
    organizationId?: string;
    code: string;
    severity: AlertSeverity;
    message: string;
  }): OrderAlert {
    return new OrderAlert(
      generateEntityId(),
      p.orderId,
      p.code,
      p.severity,
      p.message,
      AlertStatus.OPEN,
      null,
      null,
      null,
      null,
      null,
      new Date(),
      p.organizationId ?? "org_001",
      0,
    );
  }

  ack(uid: string, expectedVersion?: number): boolean {
    this.assertExpectedVersion(expectedVersion);
    if (this._status !== AlertStatus.OPEN) return false;

    this._status = AlertStatus.ACKNOWLEDGED;
    this._ackBy = uid;
    this._ackAt = new Date();
    this._version += 1;
    return true;
  }

  resolve(uid: string, reason?: string, expectedVersion?: number): boolean {
    this.assertExpectedVersion(expectedVersion);
    if (this._status === AlertStatus.RESOLVED) return false;

    this._status = AlertStatus.RESOLVED;
    this._resBy = uid;
    this._resAt = new Date();
    this._resR = reason ?? null;
    this._version += 1;
    return true;
  }

  snapshot(): OrderAlertSnapshot {
    return {
      id: String(this.id),
      organizationId: this.organizationId,
      orderId: this.orderId,
      code: this.code,
      severity: this.severity,
      message: this.message,
      status: this._status,
      acknowledgedBy: this._ackBy,
      acknowledgedAt: this._ackAt?.toISOString() ?? null,
      resolvedBy: this._resBy,
      resolvedAt: this._resAt?.toISOString() ?? null,
      resolutionReason: this._resR,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: OrderAlertSnapshot): OrderAlert {
    return new OrderAlert(
      createEntityId(s.id),
      s.orderId,
      s.code,
      s.severity as AlertSeverity,
      s.message,
      s.status as AlertStatus,
      s.acknowledgedBy,
      s.acknowledgedAt ? new Date(s.acknowledgedAt) : null,
      s.resolvedBy,
      s.resolvedAt ? new Date(s.resolvedAt) : null,
      s.resolutionReason,
      new Date(s.createdAt),
      s.organizationId ?? "org_001",
      s.version ?? 0,
    );
  }

  private assertExpectedVersion(expectedVersion?: number): void {
    if (expectedVersion !== undefined && expectedVersion !== this._version) {
      throw new OrderConcurrencyError(
        `Alert version mismatch: expected ${expectedVersion}, current ${this._version}`,
        {
          alertId: String(this.id),
          expectedVersion,
          currentVersion: this._version,
        },
      );
    }
  }
}
