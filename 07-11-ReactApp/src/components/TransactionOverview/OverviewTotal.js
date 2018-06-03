import React from 'react';
import styled from 'styled-components';
import { border, white } from '../../constants/colors';
import OverviewRow from './OverviewRow';
import TransactionValue from '../TransactionValue';

const OverviewRoot = styled.div`
  margin: 20px 0;
  padding: 20px 10px;
  border: 1px solid ${ border};
  border-radius: 4px;
  background-color: ${ white};
`;

export default ({ overview }) => (
  <OverviewRoot class="transaction-overview">
    <OverviewRow income>
      Income
      <TransactionValue type="income">{overview.income}</TransactionValue>
    </OverviewRow>
    <OverviewRow expenses>
      Expenses
      <TransactionValue type="expense">{overview.expenses}</TransactionValue>
    </OverviewRow>
    <OverviewRow total>
      Total
      {overview.total < 0 ? <TransactionValue type="expense">{overview.total}</TransactionValue> : <TransactionValue type="income">{overview.total}</TransactionValue>}
    </OverviewRow>
  </OverviewRoot>
)
