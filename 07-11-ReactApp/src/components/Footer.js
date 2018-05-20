import styled from 'styled-components';
import { backgroundColor } from '../constants/colors';

export default styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: fixed;
  background-color: ${ backgroundColor };
  height: 70px;
  bottom: 0;
`;
