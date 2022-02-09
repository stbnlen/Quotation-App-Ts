import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
  background-color: #0d2235;
}
.error {
  background-color: #b7322c;
  padding: 1rem;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}
.resultado {
  color: white;
}
.resultado h2 {
  font-weight: bold;
  color: white;
}
.resultado p {
  font-size: 18px !important;
}
.resultado p span {
  font-weight: bold;
}
p.precio {
  font-size: 30px !important;
}
`;
