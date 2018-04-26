import React from 'react';
import styled from 'styled-components';
import TransactionButtons from './TransactionButtons';
import moment from 'moment';

const TransactionRoot = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 6px;
  background-color: #C1D9C2;
`;
const TransactionRow = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 15px;
   padding-top: 5px;
`;

const TransactionRowExpanded = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 5px;
`;

let IncomeDiv = styled.div`
  color: #73A05C;
`;

const ExpenseDiv = styled.div`
  color: #DB8070;
 `;

const DateDiv = styled.div`
  font-size: 75%;
  align-items:center;
  padding-left: 15px;
  padding-top: 10px;
`
export default ({data,expanded}) => (
  <TransactionRoot>
        <TransactionRow>
          <div>
            {data.name}
          </div>
          {data.type === 'income'? <IncomeDiv>+ {data.value} CZK</IncomeDiv>:
            <ExpenseDiv>- {data.value} CZK </ExpenseDiv>}
        </TransactionRow>
      { expanded &&
        <TransactionRowExpanded>
          <DateDiv> {moment(new Date(data.created)).format(data.created.format || 'HH:mm DD. MM. YYYY')} </DateDiv>
          <TransactionButtons/>
        </TransactionRowExpanded>
      }
    </TransactionRoot>
)
