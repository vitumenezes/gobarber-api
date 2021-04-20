import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  font-weight: 500;
  background: #ff9000;
  color: #312e38;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
