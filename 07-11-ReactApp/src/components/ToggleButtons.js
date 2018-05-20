import React from 'react';
import styled from 'styled-components';
import { globalBorderRadius } from '../constants/other';

const ToggleRoot = styled.div`
  display: flex;
  margin: ${({ margin }) => margin};
`;

const ToggleButton = styled.button`
  appearance: none;
  padding: 10px 25px;
  border-style: none;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #8c7b75;
  color: #00000;

  &:first-of-type {
    border-top-left-radius: ${ globalBorderRadius };
    border-right: .5px solid #fdfdfd;
  }

  &:last-of-type {
    border-top-right-radius: ${ globalBorderRadius };
    border-left: .5px solid #fdfdfd;
  }

  ${({ active }) => active && `
    background-color: #554a47;
    color: #E6EFEE;
    border-bottom: 2px dashed #ffffff;
  `}
`;
let activeIndex = 0;

export default ({ buttonNames, onClick = ()=>{}, ...other }) => (
  <ToggleRoot {...other}>
    {buttonNames.map((name, key) => (
      <ToggleButton type="button" active={key === activeIndex} onClick={() => onClick(key)}>{name}</ToggleButton>
    ))}
  </ToggleRoot>
)
