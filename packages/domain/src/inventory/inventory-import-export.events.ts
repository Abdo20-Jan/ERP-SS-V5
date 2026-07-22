export interface ImportExportDomainEvent { type: string; jobId: string; occurredAt: string; payload?: Record<string,unknown> }
export function importJobCreatedEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ImportJobCreated", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function importJobValidatedEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ImportJobValidated", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function importJobAppliedEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ImportJobApplied", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function importJobCancelledEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ImportJobCancelled", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function exportJobCreatedEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ExportJobCreated", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function exportJobCompletedEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ExportJobCompleted", jobId, occurredAt: new Date().toISOString(), payload: p } }
export function exportJobCancelledEvent(jobId: string, p?: Record<string,unknown>): ImportExportDomainEvent { return { type: "ExportJobCancelled", jobId, occurredAt: new Date().toISOString(), payload: p } }
