import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as Comlink from 'comlink';
import { Watch } from 'react-loader-spinner';
import {
  Prover as TProver,
  SignedSession as TSignedSession,
  NotaryServer,
  ProofData,
} from 'tlsn-js';
import { requests } from './requests';
const { init, Prover, SignedSession, TlsProof }: any = Comlink.wrap(
  new Worker(new URL('./worker.ts', import.meta.url)),
);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);

function App(): ReactElement {
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [proofHex, setProofHex] = useState<null | string>(null);

  const { dns, headers, method, url, body } = requests['swapi'];
  const onClick = useCallback(async () => {
    setProcessing(true);
    const notary = NotaryServer.from(`http://18.207.122.203:7047`);
    console.time('submit');
    await init({ loggingLevel: 'Debug' });
    const prover = (await new Prover({
      serverDns: dns,
    })) as TProver;

    await prover.setup(await notary.sessionUrl());
    const resp = await prover.sendRequest('ws://localhost:55688', {
      url,
      method: method as any,
      headers,
      body,
    });

    console.timeEnd('submit');
    console.log(resp);

    const session = await prover.notarize();

    setProcessing(false);
    setProofHex(session.signature);
    setResult(session.signedSession);
  }, [setProofHex, setProcessing]);

  const onAltClick = useCallback(async () => {
    setProcessing(true);
    await init({ loggingLevel: 'Debug' });
    const proof = await Prover.notarize({
      id: 'test',
      notaryUrl: 'http://localhost:7047',
      websocketProxyUrl: 'ws://localhost:55688',
      url: 'https://swapi.dev/api/people/1',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        hello: 'world',
        one: 1,
      },
      commit: {
        sent: [{ start: 0, end: 50 }],
        recv: [{ start: 0, end: 50 }],
      },
    });

    setProofHex(proof);
  }, [setProofHex, setProcessing]);

  useEffect(() => {
    (async () => {
      if (proofHex) {
        const notary = NotaryServer.from(`http://localhost:7047`);
        const notaryKey = await notary.publicKey();
        setProcessing(false);
      }
    })();
  }, [proofHex, setResult]);

  return (
    <div>
      <div>
        <button
          id="start-demo"
          onClick={!processing ? onClick : undefined}
          disabled={processing}
        >
          Start Demo (Normal config)
        </button>
      </div>
      <div>
        <button
          onClick={!processing ? onAltClick : undefined}
          disabled={processing}
        >
          Start Demo 2 (With helper method)
        </button>
      </div>
      <div>
        <b>Proof: </b>
        {!processing && !proofHex ? (
          <i>not started</i>
        ) : !proofHex ? (
          <>
            Proving data from swapi...
            <Watch
              visible={true}
              height="40"
              width="40"
              radius="48"
              color="#000000"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            Open <i>Developer tools</i> to follow progress
          </>
        ) : (
          <>
            <details id="proof">
              <summary>View Proof</summary>
              <pre>{JSON.stringify(proofHex, null, 2)}</pre>
            </details>
          </>
        )}
      </div>
      <div>
        <details id="verification">
          <summary>Verification: </summary>
          {!proofHex ? (
            <i>not started</i>
          ) : !result ? (
            <i>verifying</i>
          ) : (
            <pre>{JSON.stringify(result, null, 2)}</pre>
          )}
        </details>
      </div>
    </div>
  );
}
