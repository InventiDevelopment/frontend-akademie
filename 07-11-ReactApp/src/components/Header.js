import styled from 'styled-components';
import { backgroundColor } from '../constants/colors';

export default styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  position: fixed;
  background-color: ${ backgroundColor };
  height: 70px;
  top: 0;

  ${({ centered }) => centered && `
    justify-content: center;
  `}
`;

