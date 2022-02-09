/* eslint-disable no-unused-vars */
import React from 'react';

import { Label, Select } from './styles';

type Props = {
  label: string;
  state: string;
  setState: (value: string) => void;
  options: Options[];
};

type Options = {
  CoinInfo: InfoCoin;
};

type InfoCoin = {
  Id: string;
  Name: string;
  FullName: string;
};

export const CryptoSelect: React.FC<Props> = ({ label, setState, state, options }) => (
  <>
    <Label>{label}</Label>
    <Select onChange={(e) => setState(e.target.value)} value={state}>
      <option value="">-- Selecciones --</option>
      {options.map(({ CoinInfo: { Id, Name, FullName } }) => (
        <option key={Id} value={Name}>
          {FullName}
        </option>
      ))}
    </Select>
  </>
);
