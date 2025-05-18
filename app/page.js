import CryptoServer from '@/components/CryptoServer';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <div className="padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <Suspense fallback={<p>Loading...</p>}>
            <CryptoServer />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
