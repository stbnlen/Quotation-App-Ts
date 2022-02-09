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
  codigo: string;
  nombre: string;
};

export const CoinSelect: React.FC<Props> = ({ label, setState, state, options }) => (
  <>
    <Label>{label}</Label>
    <Select onChange={(e) => setState(e.target.value)} value={state}>
      <option value="">-- Selecciones --</option>
      {options.map(({ codigo, nombre }) => (
        <option key={codigo} value={codigo}>
          {nombre}
        </option>
      ))}
    </Select>
  </>
);
