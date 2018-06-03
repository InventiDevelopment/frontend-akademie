import React from 'react';
import styled from 'styled-components';

const ToggleRoot = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ToggleButton = styled.button`
  appearance: none;
  padding: 7px 15px;
  border-style: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #FFF;
  color: #000;
  &:first-of-type {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  &:last-of-type {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  ${({ active }) => active && `
    background-color: #6BBCFA;
    color: #FFF;
  `}
`;

export default ({ buttonNames, onClick = ()=>{}, activeIndex = 0, ...other }) => (
  <ToggleRoot {...other}>
    {buttonNames.map((name, key) => (
      <ToggleButton type="button" active={key === activeIndex} onClick={() => onClick(key)}>{name}</ToggleButton>
    ))}
  </ToggleRoot>
)