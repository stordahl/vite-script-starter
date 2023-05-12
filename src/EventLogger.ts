import { logEvent } from './core'
import type { Payload } from './types'

class EventLogger {
  logger_id: string;
  env: "staging"|"production"

  constructor(logger_id:string, env:"staging"|"production" = "staging"){
    this.logger_id = logger_id;
    this.env = env
  }

  /**
    * @function
    * @description logs an event with a given payload */
  log(payload:Payload){
    logEvent({...this, ...payload})
  }
  /**
    * @function
    * @description provides metadata for the given EventLogger instance */ 
  id():EventLogger {
    console.log(`EventLogger Metadata`, { ...this })
    return this;
  }
}

export default EventLogger
