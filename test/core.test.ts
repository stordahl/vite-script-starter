import { describe, expect, expectTypeOf, it, vi } from 'vitest'
import { logEvent } from '../src/core'
import type { Event } from '../src/types'

vi.spyOn(console, 'log');

const samplePayload = {
  logger_id: "my logger", 
  env: "staging", 
  event_type: "click", 
  event_json: {"key": "value"},
}

describe("core", () => {
  describe("logEvent", () => {
    it("should console.log the event payload", () => {

    })

    it("should return the correct data structure from an event call", () => {
      const event = logEvent(samplePayload)
      expect(event).toEqual(samplePayload)
      expectTypeOf(event).toMatchTypeOf<Event>()
    })
  })
})
