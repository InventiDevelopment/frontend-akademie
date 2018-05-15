import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';
import styled from 'styled-components';
import MainModal from "./Modal";

const Page = styled.div`
    height: 94vh;
    overflow: hidden;
`

const Box = styled.div`
  color: black;
  background-color: white;
  text-align: center;
  padding: 5%;
  box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  color: white;
  text-align: center;
  text-shadow: 1px 3px 20px rgba(0,0,0,0.2),
  0px -5px 35px rgba(255,255,255,0);
`

const TransactionType = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5% auto;
    padding: 2%;
    border: solid 1px black;
    border-radius: 40px;
`

const TransactionUl = styled.div`
    height: calc(100vh - (170px + 170px));
    overflow-y: auto;
`

export default ({ transactions, deleteTransaction }) => (
      <Page>
      <div>    
        <React.Fragment>
          <Title><h1>Transactions</h1></Title>
          <Box>
          <TransactionType>
              <a>ALL</a>
              <a>INCOME</a>
              <a>EXPENSES</a>
          </TransactionType>
          <TransactionUl>
          <ul>
            {
              this.state.stateTransactions.map((transaction) =>
                <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
              )
            }
          </ul>
          </TransactionUl>
          </Box>
        </React.Fragment>
      <MainModal />
      </div>
      </Page>
      )
