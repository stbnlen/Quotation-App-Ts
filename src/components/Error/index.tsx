import React from 'react';

import { ErrorMessage } from './styles';

type Props = {
  mensaje: string;
};

export const Error: React.FC<Props> = ({ mensaje }) => {
  return <ErrorMessage>{mensaje}</ErrorMessage>;
};
