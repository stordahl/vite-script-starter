export type Event = {
  logger_id: string;
  env: 'staging' | 'production';
  event_type: 'click' | 'hover' | 'view';
  event_json: JSON;
}

export type Payload = {
  event_type: 'click' | 'hover' | 'view';
  event_json: JSON;
}
