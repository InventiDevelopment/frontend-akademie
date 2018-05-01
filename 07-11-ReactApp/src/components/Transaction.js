import React from 'react';
import '../scss/app.css';
import styled from 'styled-components';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #009faf;
`;

export default ({ data, expanded, toggleExpanded, deleteTransaction }) => (
    <TransactionRoot>
        <div onClick={toggleExpanded}>
            {data.name}
            {data.value}
        </div>
        { expanded &&
            <button className="select-option-button" onClick={() => deleteTransaction(data)}><i class="fas fa-trash-alt"></i></button>
        }
    </TransactionRoot>
)