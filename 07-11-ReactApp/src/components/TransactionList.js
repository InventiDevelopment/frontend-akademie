import React from 'react';
import styled from 'styled-components';
import TransactionContainer from '../components/TransactionContainer';
import transactions from '../data/transactions';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export default ({ transaction, deleteTransaction }) => (
  <React.Fragment>
    <List>
      {
        transactions.map((transaction) =>
          <TransactionContainer data={transaction} deleteTransaction={deleteTransaction} />
        )
      }
    </List>
  </React.Fragment>
)