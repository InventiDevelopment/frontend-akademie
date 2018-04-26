import React from 'react';
import styled from 'styled-components';
import transactions from '../data/transactions';

const BalanceDiv = styled.div`
  display: flex;
  justify-content: space-between
  padding: 25px;
  font-size: 120%;`
let IncomeDiv = styled.div`
  color: #73A05C;
`;
let total = 0;
let type = transactions.type;
export default () => (
  <BalanceDiv>
    <div>Total Balance</div>
    <IncomeDiv>
      <span>+ </span>
      <span>{total = transactions.reduce((prev, curr) => {return curr.type === 'income'? prev + curr.value: prev - curr.value},0)}</span>
      <span> CZK</span>
    </IncomeDiv>
  </BalanceDiv>
)