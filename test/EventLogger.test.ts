import { afterEach, describe, expect, it, vi } from 'vitest'
import EventLogger from '../src/EventLogger'
import { Payload } from '../src/types';

vi.spyOn(console, 'log');

const samplePayload:Payload = {event_type: 'click', event_json: { "element_id": "btn" }} 

afterEach(() => {
  vi.clearAllMocks()
})

describe("EventLogger", () => {
  const logger = new EventLogger("my logger", "staging");
  describe("logger.id", () => {
    it("should call console.log", () => {
      logger.id()
      expect(console.log).toHaveBeenCalled()
    })
  })
  describe("logger.log", () => {
    it("should call console.log with the given payload", () => {
      logger.log(samplePayload)
      expect(console.log).toHaveBeenCalledWith({env: "staging", logger_id: "my logger", ...samplePayload})
    })
  })
})

