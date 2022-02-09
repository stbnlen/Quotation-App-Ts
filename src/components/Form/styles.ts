import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
