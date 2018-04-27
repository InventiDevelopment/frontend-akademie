import React from 'react';
import Modal from 'react-modal';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';
import styled from 'styled-components';

const Page = styled.div`
  background-color: white;
  text-align: center;
  padding: 5%;
  box-shadow: 0px 0px 10px 2px rgba(119, 119, 119, 0.27);
`;

const Title = styled.div`
  font-weight: 300;
`

const ModalWindow = styled.div`
    height: 50%;
`;

const FormButtons = styled.div`
    margin: 40px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;

const EachButton = styled.div`
    border: 1px solid black;
    padding: 10px;
`;

export default class TransactionList extends React.Component {
  state = {
    stateTransactions: [],
    modalOpen: false
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

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <Page>
        <Title><h1>Transactions</h1></Title>
        <ul>
          {
            this.state.stateTransactions.map((transaction) =>
              <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
            )
          }
        </ul>
        </Page>
        <footer>
        <button onClick={this.openModal}><i class="fas fa-plus-circle"></i></button>
        <ModalWindow>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
            <h1>New transaction</h1>
            <input placeholder="Name"/>
            <input placeholder="Value"/>
            <input type="date" />
            <FormButtons>
            <EachButton><button>Add</button></EachButton>
            <EachButton><button>Cancel</button></EachButton>
            </FormButtons>
        </Modal>
        </ModalWindow>
        </footer>
      </React.Fragment>
    )
  }
}
