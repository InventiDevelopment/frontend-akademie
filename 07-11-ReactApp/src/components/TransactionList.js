/* eslint-disable no-unused-vars */
import React from 'react'
import TransactionContainer from './TransactionContainer'
import styled from 'styled-components';
import AddModal from './AddModal';

const TransList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex: 1 0 auto;
`;

const TransListDiv = styled.div`
   height: calc(89vh - (210px));
   padding: 0 20px;
   margin-top: calc(11vh + (130px));
   margin-bottom: 80px;
   overflow-y: auto;
`

export default  class TransactionList extends React.Component{

  render(){
    return(
      <TransListDiv>
        <TransList>
          {
            this.props.stateTransactions.map((transaction, i) =>
              <TransactionContainer data = {transaction} key={i} deleteTransaction={this.props.deleteTransaction}
                                    editTransaction={this.props.editTransaction}/>
            )
          }
        </TransList>
        <AddModal modalOpen={this.props.modalOpen} closeModal={this.props.closeModal} addTransaction={this.props.addTransaction}/>
      </TransListDiv>
    )
  }
}

