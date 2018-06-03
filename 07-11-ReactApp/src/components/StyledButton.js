import styled from 'styled-components';
import { globalBorderRadiusButton } from '../constants/other';
import { globalBorderRadius } from '../constants/other';

export default styled.button`
  appearance: none;
  border-style: none;
  border-radius: ${ globalBorderRadius };
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0 1px 3px rgba(0,0,0,.2);
  box-shadow: 0 0 8px rgba(0,0,0,.35);
  background: #78909c;

  ${({ block }) => block && `
    display: block;
    width: 100%;
  `}

  ${({ add }) => add && `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    padding: 0;
    border-radius: ${ globalBorderRadiusButton };
  `}

  ${({ overview }) => overview && `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    padding: 0;
    margin-left: 1rem;
    border-radius: ${ globalBorderRadiusButton };
  `}

  ${({ close }) => close && `
    display: block;
    border-radius: 50%;
    padding: 0px;
    margin: 0 0 1rem auto;
    text-align: right;
    background: none;
    color: #78909c;
    text-shadow: none;
    box-shadow: none;
  `}

  ${({ save }) => save && `
    display: block;
    margin: 0 auto;
    width: 70px;
    height: auto;
    text-align: center;
    text-transform: uppercase;
  `}

  ${({ icon }) => icon && `
    padding: 5px 15px;
  `}

  ${({ danger }) => danger && `
    background: linear-gradient(to top, #AF4646, #D87777);
    width: 35px;
    height: 30px;
    padding: 0;
  `}
`;
