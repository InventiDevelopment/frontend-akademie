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
`

export default class OverviewText extends React.Component{
  calcIncome = () =>{
    const income = this.props.stateTransactions.filter(object => object.type === 'income')
    return income.reduce((prev, curr) => {return  prev + curr.value},0)
  }
  calcExpenses = () =>{
    const expenses = this.props.stateTransactions.filter(object => object.type === 'expense')
    return expenses.reduce((prev, curr) => {return  prev + curr.value},0)
  }
  calcTotal = () =>{
    return this.props.stateTransactions.reduce((prev, curr) => {return curr.type === 'income'? prev + curr.value: prev - curr.value},0)
  }
  render(){
    return(
      <Wrap>
        <LineDiv>
          <div>Income</div>
          <IncomeDiv>+ {this.calcIncome()} CZK</IncomeDiv>
        </LineDiv>
        <LineDiv>
          <div>Expenses</div>
          <ExpenseDiv >- {this.calcExpenses()} CZK</ExpenseDiv>
        </LineDiv>
        <LineDiv>
          <div>Total Balance</div>
          {this.calcTotal() < 0? <ExpenseDiv> {this.calcTotal()} CZK</ExpenseDiv>:
            <IncomeDiv>+ {this.calcTotal()} CZK</IncomeDiv>
          }
        </LineDiv>
      </Wrap>
    )
  }
}
