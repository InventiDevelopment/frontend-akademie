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



export default class TotalBalance extends React.Component{
  calcTotal = () =>{
    return this.props.stateTransactions.reduce((prev, curr) => {return curr.type === 'income'? prev + curr.value: prev - curr.value},0)
  }

  render(){
    return(
      <BalanceDiv>
        <div>Total Balance</div>
        {this.calcTotal() < 0?
          <ExpenseDiv>
            <span>{this.calcTotal()}</span>
            <span> CZK</span>
          </ExpenseDiv>:
          <IncomeDiv>
            <span>+ </span>
            <span>{this.calcTotal()}</span>
            <span> CZK</span>
          </IncomeDiv>
        }
      </BalanceDiv>
    )
  }
}
