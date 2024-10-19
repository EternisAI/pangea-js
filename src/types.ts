export type CommitData = {
  start: number;
  end: number;
};

export type ParsedTranscriptData = {
  all: CommitData;
  info: CommitData;
  headers: { [key: string]: CommitData };
  body?: CommitData;
  json?: { [path: string]: CommitData };
  lineBreaks: CommitData[];
};

export type ProofData = {
  time: number;
  server_dns: string;
  sent: string;
  sent_auth_ranges: { start: number; end: number }[];
  recv: string;
  recv_auth_ranges: { start: number; end: number }[];
};

export interface AttestationObject {
  version?: string;
  meta?: {
    notaryUrl: string;
    websocketProxyUrl: string;
  };
  signature: string;
  application_data: string;
  attributes: Attribute[];
}

export interface RemoteAttestation {
  protected: string;
  payload: string;
  signature: string;
  certificate: string;
  payload_object: Payload;
}
export interface Payload {
  module_id: string;
  timestamp: number;
  digest: string;
  pcrs: Map<number, string>;
  certificate: Uint8Array;
  cabundle: Uint8Array[];
  public_key: Buffer;
  user_data: Uint8Array | null;
  nonce: string | null;
}

export type Attributes = Attribute[];

/**
 * @param attribute_hex is the hex binary epresentation of the attribute
 * @param attribute_name is the name of the attribute
 * @param signature is the signature of the attribute in bytes or attribute_hex
 */
export type Attribute = {
  attribute_name: string;
  attribute_hex?: string;
  signature: string;
};

export type DecodedData = {
  hostname: string;
  request_url: string;
  request: string; //contain headers
  response_header: string;
  response_body: string;
};

export type NotarizedData = {
  bytes_data: string;
  decoded_data: DecodedData;
  attributes: Attribute[] | null;
};

export type NotaryRequest = {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
  notaryUrl: string;
  websocketProxyUrl: string;
  timestamp: number;
  type: string;
};

export type TargetPage = {
  url: string;
  selector: string;
};

type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH';
type TransportMechanism = 'xmlhttprequest' | 'main_frame';
type ResponseType = 'json' | 'text' | 'xml' | 'html';

export interface Provider {
  id: number;
  host: string; // e.g. api.x.com
  title: string;
  description: string;
  icon: string; //url to icon image

  urlRegex: string; // e.g. ^https://api\.x\.com/1\.1/account/settings\.json(\?.*)?$
  targetUrl: string; // URL to redirect user before notarization. e.g. https://www.x.com/home
  method: HttpMethod; // e.g. GET
  transport?: TransportMechanism; //NOTE: LEGACY, type of request, is not used anymore. e.g. xmlhttprequest
  responseType: ResponseType;

  actionSelectors?: string[]; // url to redirect user before notarization. e.g. ["a[href^='/user/'][href$='/']"] or ["https://www.x.com/home"]
  preprocessor?: string; // Javascript function to process the response in a form that is more easy to evaluate. e.g. "function(data) { var result = ''; for (var key in data) { result += key + '=' + data[key] + '; '; } return JSON.parse(result); }"
  attributes?: string[]; // List of JMESPath expressions used to extract attributes from the provider's response.  e.g. ["screen_name"]
}

interface ExpectedPcrs {
  [key: string]: string; // Base64-encoded PCR value
}

export interface NotaryConfig {
  version: string;
  EXPECTED_PCRS: ExpectedPcrs;
  PROVIDERS: Provider[];
  [key: string]: any; // For additional properties
}
