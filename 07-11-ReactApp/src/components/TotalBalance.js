import React from 'react';
import styled from 'styled-components';

const BalanceDiv = styled.div`
  display: flex;
  justify-content: space-between
  padding: 25px;
  font-size: 120%;`
let IncomeDiv = styled.div`
  color: #73A05C;
`;
let ExpenseDiv = styled.div`
  color: #DB8070;
`;



export default ({overview}) => (
      <BalanceDiv>
        <div>Total Balance</div>
        {overview.total < 0?
        <ExpenseDiv>
            <span>{overview.total}</span>
            <span> CZK</span>
          </ExpenseDiv>:
          <IncomeDiv>
            <span>+ </span>
            <span> {overview.total} </span>
            <span> CZK</span>
          </IncomeDiv>
        }
      </BalanceDiv>
)