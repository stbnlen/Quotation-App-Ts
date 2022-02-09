import React from 'react';

import { Info, Price, ResultDiv } from './styles';

type Result = {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  LASTUPDATE: string;
};

type Props = {
  result: Result;
};

export const Quote: React.FC<Props> = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResultDiv>
      <Price>
        El precio es: <span>{result.PRICE}</span>{' '}
      </Price>
      <Info>
        Precio más alto del día: <span>{result.HIGHDAY}</span>{' '}
      </Info>
      <Info>
        Precio más bajo del día: <span>{result.LOWDAY}</span>{' '}
      </Info>
      <Info>
        Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>{' '}
      </Info>
      <Info>
        Última Actualización: <span>{result.LASTUPDATE}</span>{' '}
      </Info>
    </ResultDiv>
  );
};
