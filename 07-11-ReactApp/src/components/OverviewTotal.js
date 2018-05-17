import React from 'react';
import styled from 'styled-components';

const IncomeDiv = styled.div`
  color: #73A05C;
`;
const ExpenseDiv = styled.div`
  color: #DB8070;
`;
const LineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    font-size: 110%;
    &:last-of-type{
        font-size: 130%;
        font-weight: bold;
    }
`
const Wrap =styled.div`
  margin-top: 25px;
  padding: 0 20px;
`

export default ({overview}) => (
  <Wrap>
    <LineDiv>
      <div>Income</div>
      <IncomeDiv>+ {overview.income} CZK</IncomeDiv>
    </LineDiv>
    <LineDiv>
      <div>Expenses</div>
      <ExpenseDiv >- {overview.expenses} CZK</ExpenseDiv>
    </LineDiv>
    <LineDiv>
      <div>Total</div>
      {overview.total < 0? <ExpenseDiv> {overview.total} CZK</ExpenseDiv>:
        <IncomeDiv>+ {overview.total} CZK</IncomeDiv>
      }
    </LineDiv>
  </Wrap>
)