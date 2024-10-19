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
