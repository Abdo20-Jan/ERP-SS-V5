import type {
  RequestInventoryEventReplayDto,
  MoveInventoryEventToDeadLetterDto,
  CancelInventoryEventDto,
} from "@sunset/contracts";

export type RequestReplayDto = RequestInventoryEventReplayDto;
export type MoveToDeadLetterDto = MoveInventoryEventToDeadLetterDto;
export type CancelEventDto = CancelInventoryEventDto;
