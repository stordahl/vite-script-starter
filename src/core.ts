import type { Event } from './types'

export function logEvent({ logger_id, env, event_type, event_json }:Event) {
  // Normally you'd send data to an api here, 
  // but in this template, we'll just log it
  console.log({logger_id, env, event_type, event_json})
}
