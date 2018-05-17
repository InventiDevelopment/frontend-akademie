/* eslint-disable no-unused-vars */
import React from 'react'
import TransactionContainer from './TransactionContainer'
import styled from 'styled-components';

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

export default ({ transactions, deleteTransaction, editTransaction, newValue}) => (
      <TransListDiv>
        <TransList>
          {
            [...transactions].reverse().map((transaction) =>
              <TransactionContainer data={transaction}
                                    deleteTransaction={deleteTransaction}
                                    editTransaction={editTransaction}
                                    newValue={newValue}/>
            )
          }
        </TransList>
      </TransListDiv>
)
