import React from 'react';
import styled from 'styled-components';
import { transactionExpense, transactionIncome } from "../constants/colors";

const FlexContainer = styled.div`
  display: flex;
  align-items:center;
`;

const Value = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${ transactionIncome};
  margin-right: 5px;

  ${({ type }) =>
    type === 'expense' && `
      color: ${ transactionExpense};
    `
  }
`;

const Currency = styled.span`
  display: inline-block;
  font-size: 10px;
`;

export default ({ type, children }) => (
  <FlexContainer>
    <Value type={type}>
      {type === 'expense' ? `- ${children}` : `+ ${children}`}
    </Value>
    <Currency>CZK</Currency>
  </FlexContainer>
)
