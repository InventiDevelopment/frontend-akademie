/* eslint-disable no-unused-vars */
import React from 'react'
import transactions from '../data/transactions'
import TransactionContainer from './TransactionContainer'
import styled from 'styled-components';

const TransactionList = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  flex: 1 0 auto;
`;

const Section = styled.section`
  height: 52vh;
  margin-top: 26vh;
  margin-bottom: 16vh;
  overflow-y: auto;
`

export default () => (
  <Section>
    <TransactionList>
      {
        transactions.map((transaction, i) =>
          <TransactionContainer data = {transaction} key={i}/>
        )
      }
    </TransactionList>
  </Section>
)
