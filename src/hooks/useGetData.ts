import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetData = () => {
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    const consultarAPi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const {
        data: { Data },
      } = await axios.get(url);

      setCryptoList(Data);
    };

    consultarAPi();
  }, []);
  return cryptoList;
};
