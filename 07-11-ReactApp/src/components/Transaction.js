import React from 'react';
import styled from 'styled-components';

const TransactionRoot = styled.div`
   padding: 15px;
   display: flex;
   justify-content:space-between;
   background-color: white;
   margin: 20px;
`;
export default ({data, expanded}) => (
    <TransactionRoot>
        <div>
          {data.name}
          {data.value}
        </div>
      { expanded &&
        <div> Jsem videt </div>
      }
    </TransactionRoot>
)
