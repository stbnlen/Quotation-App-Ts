import { CryptoSelect } from '@containers/CryptoSelect';
import React, { useState } from 'react';

export const useCrypto = (label: any, initialState: any, options: any) => {
  // State del custom hook
  const [state, setState] = useState(initialState);

  const SelectCrypto = () => (
    <CryptoSelect label={label} setState={setState} state={state} options={options} />
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectCrypto, setState];
};
