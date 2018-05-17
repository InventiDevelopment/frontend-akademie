import React from 'react';
import styled from 'styled-components';
import { transactionExpense, transactionIncome } from "../constants/colors";

const FlexContainer = styled.div`
  display: flex;
  align-items:center;
`;

const Value = styled.div`
  font-weight: bold;
  color: ${ transactionExpense };
  margin-right: 5px;

  ${({ type }) =>
    type === 'income' && `
      color: ${ transactionIncome };
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
