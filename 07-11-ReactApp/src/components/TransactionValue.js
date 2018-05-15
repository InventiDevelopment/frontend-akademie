import React from 'react';
import styled from 'styled-components';

const FlexContaner = styled.div`
  display: flex;
  align-items:center;
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
  <FlexContaner>
    <Value type={type}>
      {type === 'income' ? `+ ${children}` : `- ${children}`}
    </Value>
    <Currency>CZK</Currency>
  </FlexContaner>
)