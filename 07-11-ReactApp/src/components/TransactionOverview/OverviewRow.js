import styled from 'styled-components';
import { transactionOverviewIncomeBackground, transactionOverviewExpensesBackground, transactionOverviewTotalBackground } from '../../constants/colors';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 8px 15px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ income }) => income && `
    background-color: ${ transactionOverviewIncomeBackground };
  `}

  ${({ expenses }) => expenses && `
    max-width: 90%;
    background-color: ${ transactionOverviewExpensesBackground };
  `}

  ${({ total }) => total && `
    background-color: ${ transactionOverviewTotalBackground };
  `}
`;
