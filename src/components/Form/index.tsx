/* eslint-disable no-unused-vars */
import { Error } from 'components/Error';
import { useCoin } from 'hooks/useCoin';
import { useCrypto } from 'hooks/useCrypto';
import { useGetData } from 'hooks/useGetData';
import React, { useState } from 'react';

import { Button } from './styles';

type Props = {
  guardarMoneda: (value: string) => void;
  guardarCriptomoneda: (value: string) => void;
};

export const Form: React.FC<Props> = ({ guardarMoneda, guardarCriptomoneda }) => {
  const cryptoList = useGetData();
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
    { codigo: 'CLP', nombre: 'Peso Chileno' },
  ];

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

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}

      <SelectCoin />

      <SelectCrypto />

      <Button type="submit">Calcular</Button>
    </form>
  );
};
