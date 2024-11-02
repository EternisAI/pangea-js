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
  notary_public_key: string; // hex representation of notary public key
  signature: string; //hex representation of signature of the application_data
  application_data: string; //hex representation of bytes data
  application_data_decoded?: DecodedData;
  attributes: Attribute[]; //attributes extracted from the application_data

  meta?: {
    //legacy, to remove
    notaryUrl: string;
    websocketProxyUrl: string;
  };
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

export type Attribute = {
  attribute_name: string;
  identity_commitment?: string;
  signature: string;
};

export type DecodedData = {
  hostname: string;
  request_url: string;
  request: string; //contain headers
  response_header: string;
  response_body: string;
};

export type NotaryRequest = {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
  notaryUrl: string;
  websocketProxyUrl: string;
  timestamp: number;
};

type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH';
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
