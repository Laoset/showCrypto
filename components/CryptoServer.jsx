import { fetchCryptos } from '@/utils';
import React from 'react';
import { CryptoSwiper } from './CryptoSwiper';

const CryptoServer = async () => {
  const allCryptos = await fetchCryptos();
  return <CryptoSwiper cryptoData={allCryptos} />;
};

export default CryptoServer;
