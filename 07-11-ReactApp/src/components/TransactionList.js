import React from 'react';
import styled from 'styled-components';
import TransactionContainer from '../components/TransactionContainer';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export default ({ transactions, editTransaction, deleteTransaction }) => (
  <React.Fragment>
    <List>
      {
        transactions.map((transaction) =>
          <TransactionContainer data={transaction} editTransaction={editTransaction} deleteTransaction={deleteTransaction} />
        )
      }
    </List>
  </React.Fragment>
)
