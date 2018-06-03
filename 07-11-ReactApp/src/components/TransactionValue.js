import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  align-items: space-between;
`;

const Value = styled.div`
  font-weight: bold;
  color: #000000;
  margin-right: 5px;
  ${({ type }) =>
    type === 'income' && `
      color: #000000;
    `
  }
`;

const Currency = styled.span`
  display: inline-block;
  font-size: 10px;
`;

export default ({type, children}) => (
  <FlexContainer>
    <Value type={type}>
      {type === 'income' ? `+ ${children}` : `- ${children}`}
    </Value>
    <Currency>CZK</Currency>
  </FlexContainer>
)