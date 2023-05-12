export type Event = {
  logger_id: string;
  env: 'staging' | 'production';
  event_type: 'click' | 'hover' | 'view';
  event_json: JSONObject;
}

export type Payload = {
  event_type: 'click' | 'hover' | 'view';
  event_json: JSONObject;
}

export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = { [member: string]: JSONValue };
export interface JSONArray extends Array<JSONValue> {}
