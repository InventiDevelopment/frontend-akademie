import styled from 'styled-components';
import { backgroundColor } from '../constants/colors';

export default styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: fixed;
  background-color: ${ backgroundColor };
  height: 80px;
  bottom: 0;
`;
