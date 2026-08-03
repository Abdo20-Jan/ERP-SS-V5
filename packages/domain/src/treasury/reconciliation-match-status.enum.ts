/**
 * Bank reconciliation match status (SM-TREASURY-05).
 * Matching suggestions are advisory; confirmation is a separate command.
 */
export enum ReconciliationMatchStatus {
  UNMATCHED = "UNMATCHED",
  SUGGESTED = "SUGGESTED",
  MATCHED = "MATCHED",
  EXCEPTION = "EXCEPTION",
  IGNORED = "IGNORED",
}
