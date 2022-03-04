import { CoinSelect } from '@containers/CoinSelect';
import React, { useState } from 'react';

export const useCoin = (label: any, initialState: any, options: any) => {
  // State del custom hook
  const [state, setState] = useState(initialState);

  const Seleccionar = () => (
    <CoinSelect label={label} setState={setState} state={state} options={options} />
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, Seleccionar];
};
