import { vi } from "vitest";

// Expose a jest-compatible global so existing specs can run under vitest.
(globalThis as { jest?: typeof vi }).jest = vi;
