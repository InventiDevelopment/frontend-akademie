import React from 'react';
import styled from 'styled-components';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;

export default ({data, expanded, onClickHandler, deleteTransaction}) => (
    <TransactionRoot>
        <div onClick={toggleExpanded}>
            {data.name}
            {data.value}
        </div>
        { expanded &&
            <button onClick={() => deleteTransaction(data)}>Delete</button>
        }
    </TransactionRoot>
)
