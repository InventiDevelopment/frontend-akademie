import React from 'react';
import styled from 'styled-components';
import { border, white, transactionIncome, transactionExpense } from '../../constants/colors';
import OverviewRow from './OverviewRow';

const OverviewRoot = styled.div`
  margin: 20px 0;
  padding: 20px 10px;
  border: 1px solid ${ border};
  border-radius: 4px;
  background-color: ${ white};
`;

const OverviewIncome = styled.div`
  color: ${ transactionIncome};
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 5px;
`;

const OverviewExpense = styled.div`
  color: ${ transactionExpense};
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 5px;
`

export default ({ overview }) => (
  <OverviewRoot class="transaction-overview">
    <OverviewRow income>
      Income
      <OverviewIncome>{overview.income}</OverviewIncome>
    </OverviewRow>
    <OverviewRow expenses>
      Expenses
      <OverviewExpense>{overview.expenses}</OverviewExpense>
    </OverviewRow>
    <OverviewRow total>
      Total
      {overview.total < 0 ? <OverviewExpense>{overview.total}</OverviewExpense> : <OverviewIncome><span>+</span>{overview.total}</OverviewIncome>}
    </OverviewRow>
  </OverviewRoot>
)
