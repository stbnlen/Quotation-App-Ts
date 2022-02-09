/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useCoin } from './useCoin';
import { useCrypto } from './useCrypto';
import { useGetData } from './useGetData';

type T = (value: string) => void;

const MONEDAS = [
  { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
  { codigo: 'MXN', nombre: 'Peso Mexicano' },
  { codigo: 'EUR', nombre: 'Euro' },
  { codigo: 'GBP', nombre: 'Libra Esterlina' },
  { codigo: 'CLP', nombre: 'Peso Chileno' },
];

export const useSelect = (guardarMoneda: T, guardarCriptomoneda: T) => {
  const [error, setError] = useState(false);

  const cryptoList = useGetData();
  const [moneda, SelectCoin] = useCoin('Elige tu moneda', '', MONEDAS);
  const [crypto, SelectCrypto] = useCrypto('Elige tu criptomoneda', '', cryptoList);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (moneda === '' || crypto === '') {
      setError(true);
      return;
    }

    setError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(crypto);
  };

  return {
    error,
    handleSubmit,
    SelectCoin,
    SelectCrypto,
  };
};
