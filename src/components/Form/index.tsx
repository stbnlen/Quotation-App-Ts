/* eslint-disable no-unused-vars */
import { useSelect } from 'hooks/useSelect';
import React from 'react';

import { Error } from '../Error';
import { Button } from './styles';

type Props = {
  guardarMoneda: (value: string) => void;
  guardarCriptomoneda: (value: string) => void;
};

export const Form: React.FC<Props> = ({ guardarMoneda, guardarCriptomoneda }) => {
  const { error, SelectCoin, SelectCrypto, handleSubmit } = useSelect(
    guardarMoneda,
    guardarCriptomoneda,
  );

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}

      <SelectCoin />

      <SelectCrypto />

      <Button type="submit">Calcular</Button>
    </form>
  );
};
