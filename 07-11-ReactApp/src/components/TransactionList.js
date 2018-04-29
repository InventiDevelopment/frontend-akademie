import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';
import styled from 'styled-components';
import MainModal from "./Modal";

const Page = styled.div`
  color: black;
  background-color: white;
  text-align: center;
  padding: 5%;
  box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
`;

const Title = styled.div`
  font-weight: 300;
  color: white;
  text-align: center;
`

const TransactionType = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5% auto;
    padding: 2%;
    border: solid 1px black;
    border-radius: 40px;
`

export default class TransactionList extends React.Component {
  state = {
    stateTransactions: [],
   }

  componentDidMount() {
    this.setState({ stateTransactions: transactions })
  }

  deleteTransaction = (transaction) => {
    const newTransactions = this.state.stateTransactions.filter(
      object => JSON.stringify(transaction) !== JSON.stringify(object)
    )
    this.setState({ stateTransactions: newTransactions })
  }

  render() {
    return (
    <div>    
      <React.Fragment>
        <Title><h1>Transactions</h1></Title>
        <Page>
        <TransactionType>
            <a>VŠE</a>
            <a>PŘÍJMY</a>
            <a>VÝDAJE</a>
        </TransactionType>
        <ul>
          {
            this.state.stateTransactions.map((transaction) =>
              <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
            )
          }
        </ul>
        </Page>
      </React.Fragment>
    <MainModal />
    </div>
    )
  }
}
