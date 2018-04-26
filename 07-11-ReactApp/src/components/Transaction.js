import React from 'react';
import styled from 'styled-components';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;

export default ({ data, expanded, onClickHandler, deleteTransaction }) => (
    <TransactionRoot>
        <div>
            {data.name}
            {data.value}
        </div>
        { expanded &&
            <button onClick={() => deleteTransaction(data)}>Jsem vidět!!!</button>
        }
    </TransactionRoot>
)
