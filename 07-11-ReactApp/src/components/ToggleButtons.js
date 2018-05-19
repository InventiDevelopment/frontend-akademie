import React from 'react';
import styled from 'styled-components';
import { globalBorderRadius } from '../constants/other';

const ToggleRoot = styled.div`
  display: flex;
  margin: ${({ margin }) => margin};
`;

const ToggleButton = styled.button`
  appearance: none;
  padding: 7px 15px;
  border-style: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #8c7b75;
  color: #00000;

  &:first-of-type {
    border-top-left-radius: ${ globalBorderRadius };
    border-bottom-left-radius: ${ globalBorderRadius };
  }

  &:last-of-type {
    border-top-right-radius: ${ globalBorderRadius };
    border-bottom-right-radius: ${ globalBorderRadius };
  }

  ${({ active }) => active && `
    background-color: #554a47;
    color: #E6EFEE;
  `}
`;

export default ({ buttonNames, onClick = ()=>{}, activeIndex = 0, ...other }) => (
  <ToggleRoot {...other}>
    {buttonNames.map((name, key) => (
      <ToggleButton type="button" active={key === activeIndex} onClick={() => onClick(key)}>{name}</ToggleButton>
    ))}
  </ToggleRoot>
)
