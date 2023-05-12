import type { Event } from './types'

export function logEvent({ logger_id, env, event_type, event_json }:Event):Event {
  // Normally you'd send data to an API here, 
  // but in this template, we'll just log it
  const event = {logger_id, env, event_type, event_json}
  console.log(event)
  return event
}
