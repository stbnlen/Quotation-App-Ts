import axios from 'axios';
import { Form } from 'components/Form';
import { Quote } from 'components/Quote';
import { Spinner } from 'components/Spinner';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from 'styles/globalStyles';

import img from './assets/images/cryptomonedas.png';
import { Container, Heading, Image } from './styles/styles';

function App() {
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (coin === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

      const {
        data: { DISPLAY },
      } = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setResult(DISPLAY[crypto][coin]);
      }, 2500);
    };

    cotizarCriptomoneda();
  }, [coin, crypto]);

  return (
    <>
      <GlobalStyles />
      <Container>
        <div>
          <Image src={img} alt="imagen cripto" />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Form guardarMoneda={setCoin} guardarCriptomoneda={setCrypto} />
          {loading ? <Spinner /> : <Quote result={result} />}
        </div>
      </Container>
    </>
  );
}

export default App;