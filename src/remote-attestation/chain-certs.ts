export interface ChainCert {
  Subject: string;
  PublicKey: number[];
  Cert: string;
}

export const chainCerts: ChainCert[] = [
  //@todo chaincerts is harcoded rn but can be extracted from remote attestation cabundle actually.
  //Only the root CA should be saved or downloaded from aws.
  {
    Subject:
      'L=Seattle,ST=WA,C=US,O=Amazon,OU=AWS,CN=f328800117de2542.zonal.us-east-1.aws.nitro-enclaves',
    PublicKey: [
      4, 104, 206, 252, 21, 10, 162, 113, 69, 188, 97, 218, 16, 89, 162, 199,
      223, 176, 249, 134, 55, 80, 47, 180, 136, 236, 177, 117, 158, 166, 221,
      39, 92, 116, 149, 207, 128, 235, 168, 155, 21, 102, 248, 63, 251, 226,
      161, 244, 36, 226, 8, 211, 178, 11, 171, 220, 8, 80, 90, 55, 59, 211, 234,
      106, 118, 3, 10, 88, 146, 109, 85, 95, 144, 100, 90, 60, 158, 149, 0, 45,
      120, 168, 184, 77, 255, 217, 32, 72, 124, 109, 96, 94, 1, 108, 55, 63, 37,
    ],
    Cert: `-----BEGIN CERTIFICATE-----
MIICwDCCAkWgAwIBAgIVAKbfV8chTQG0orhIHJKrR+TH2z8CMAoGCCqGSM49BAMDMIGJMTwwOgYDVQQDDDNmMjkzMWMwOTZiM2FhNGJlLnpvbmFsLnVzLWVhc3QtMS5hd3Mubml0cm8tZW5jbGF2ZXMxDDAKBgNVBAsMA0FXUzEPMA0GA1UECgwGQW1hem9uMQswCQYDVQQGEwJVUzELMAkGA1UECAwCV0ExEDAOBgNVBAcMB1NlYXR0bGUwHhcNMjQwOTExMTYxOTIwWhcNMjQwOTEyMTYxOTIwWjCBjjELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxDzANBgNVBAoMBkFtYXpvbjEMMAoGA1UECwwDQVdTMTkwNwYDVQQDDDBpLTBiYmYxYmZlMjMyYjhjMmNlLnVzLWVhc3QtMS5hd3Mubml0cm8tZW5jbGF2ZXMwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAARe0hnB3ZEW85f7RjFxwYCfPLMvh03pFvpaJknFUhF2AdYIgAunkIBJXsf6u/CU8bo/5OwVfNxn4yhOQUuQXZaIX292/8gOdjC0Lm0BgGC0mYQRmZkQWhJXkxeq9N/NQoKjZjBkMBIGA1UdEwEB/wQIMAYBAf8CAQAwDgYDVR0PAQH/BAQDAgIEMB0GA1UdDgQWBBQb2RQICNbn9Si7cVXbL9GXofhxTDAfBgNVHSMEGDAWgBTnK8PJPbH0ZbgCg9KNzdrpRWooNjAKBggqhkjOPQQDAwNpADBmAjEAm5ULTrcL53eSDTlFvTKJ7ddFXU+wVOjGakHWmnqdIHWNtx/62y6tA6vG5YmYtni4AjEAwCMT5XjmLaygRgkywLq5ma1cQoO1vYnWeMBwDgQG69aCmG4o6uyn5/K6j9JIzz31
-----END CERTIFICATE-----`,
  },

  {
    Subject:
      'CN=3106da7af89fbcbe.us-east-1.aws.nitro-enclaves,OU=AWS,O=Amazon,C=US',
    PublicKey: [
      4, 160, 53, 187, 225, 220, 98, 228, 109, 195, 216, 28, 4, 161, 84, 139,
      110, 208, 243, 31, 43, 118, 128, 1, 210, 62, 176, 64, 18, 166, 237, 147,
      89, 64, 108, 96, 118, 114, 221, 205, 235, 124, 70, 128, 18, 240, 112, 0,
      143, 116, 206, 193, 212, 237, 173, 219, 154, 139, 155, 3, 68, 46, 68, 68,
      165, 168, 158, 81, 59, 85, 40, 122, 179, 39, 175, 51, 30, 216, 199, 13,
      83, 227, 209, 74, 232, 234, 137, 236, 235, 120, 226, 55, 50, 98, 58, 234,
      199,
    ],
    Cert: `-----BEGIN CERTIFICATE-----
MIIDFTCCApugAwIBAgIRAOgAQ6rwNUj+Q7xVgq435cQwCgYIKoZIzj0EAwMwZDELMAkGA1UEBhMCVVMxDzANBgNVBAoMBkFtYXpvbjEMMAoGA1UECwwDQVdTMTYwNAYDVQQDDC1hYzFjZDE0ZTQwZDVjZjEwLnVzLWVhc3QtMS5hd3Mubml0cm8tZW5jbGF2ZXMwHhcNMjQwOTExMTAzODE3WhcNMjQwOTE2MjMzODE3WjCBiTE8MDoGA1UEAwwzZjI5MzFjMDk2YjNhYTRiZS56b25hbC51cy1lYXN0LTEuYXdzLm5pdHJvLWVuY2xhdmVzMQwwCgYDVQQLDANBV1MxDzANBgNVBAoMBkFtYXpvbjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAldBMRAwDgYDVQQHDAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEhAxpkcdm2leGYPWO65IEcrcJne51/u/511z8qT5eGi3UHq+dSgT437R5K+rjQ4b9+0CWuQGo0CefZD+h1Y9nOCRj2/yArqA9r6wnsouR4DDhlYc9JwkTZg3JRITtR6tOo4HqMIHnMBIGA1UdEwEB/wQIMAYBAf8CAQEwHwYDVR0jBBgwFoAUv7N2SQJHzlO4r5kP60IHxBW+xxwwHQYDVR0OBBYEFOcrw8k9sfRluAKD0o3N2ulFaig2MA4GA1UdDwEB/wQEAwIBhjCBgAYDVR0fBHkwdzB1oHOgcYZvaHR0cDovL2NybC11cy1lYXN0LTEtYXdzLW5pdHJvLWVuY2xhdmVzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2NybC8wM2M3YzE5Zi1hN2I0LTQyODEtYjc0NC1kOTAwOTU4OGMyNDIuY3JsMAoGCCqGSM49BAMDA2gAMGUCMCQvq5P5a2xK0aVMtdMcw27sgvpFwnsI3g6aYM7kJ3oMWJMxTWsVx4ckZPxWkaGBNAIxALolna8NqdoGKSJkfW7k3IIKMc8U6UhIALdfoJsz0CoCFrbEkzVZ2Wfdj4FvVgkrYw==
-----END CERTIFICATE-----`,
  },

  {
    Subject: 'CN=aws.nitro-enclaves,OU=AWS,O=Amazon,C=US',
    PublicKey: [
      4, 252, 2, 84, 235, 166, 8, 193, 243, 104, 112, 226, 154, 218, 144, 190,
      70, 56, 50, 146, 115, 110, 137, 75, 255, 246, 114, 217, 137, 68, 75, 80,
      81, 229, 52, 164, 177, 246, 219, 227, 192, 188, 88, 26, 50, 183, 177, 118,
      7, 14, 222, 18, 214, 154, 63, 234, 33, 27, 102, 231, 82, 207, 125, 209,
      221, 9, 95, 111, 19, 112, 244, 23, 8, 67, 217, 220, 16, 1, 33, 228, 207,
      99, 1, 40, 9, 102, 68, 135, 201, 121, 98, 132, 48, 77, 197, 63, 244,
    ],
    Cert: `-----BEGIN CERTIFICATE-----
MIICETCCAZagAwIBAgIRAPkxdWgbkK/hHUbMtOTn+FYwCgYIKoZIzj0EAwMwSTELMAkGA1UEBhMCVVMxDzANBgNVBAoMBkFtYXpvbjEMMAoGA1UECwwDQVdTMRswGQYDVQQDDBJhd3Mubml0cm8tZW5jbGF2ZXMwHhcNMTkxMDI4MTMyODA1WhcNNDkxMDI4MTQyODA1WjBJMQswCQYDVQQGEwJVUzEPMA0GA1UECgwGQW1hem9uMQwwCgYDVQQLDANBV1MxGzAZBgNVBAMMEmF3cy5uaXRyby1lbmNsYXZlczB2MBAGByqGSM49AgEGBSuBBAAiA2IABPwCVOumCMHzaHDimtqQvkY4MpJzbolL//Zy2YlES1BR5TSksfbb48C8WBoyt7F2Bw7eEtaaP+ohG2bnUs990d0JX28TcPQXCEPZ3BABIeTPYwEoCWZEh8l5YoQwTcU/9KNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUkCW1DdkFR+eWw5b6cp3PmanfS5YwDgYDVR0PAQH/BAQDAgGGMAoGCCqGSM49BAMDA2kAMGYCMQCjfy+Rocm9Xue4YnwWmNJVA44fA0P5W2OpYow9OYCVRaEevL8uO1XYru5xtMPWrfMCMQCi85sWBbJwKKXdS6BptQFuZbT73o/gBh1qUxl/nNr12UO8Yfwr6wPLb+6NIwLz3/Y=
-----END CERTIFICATE-----`,
  },
];