import React from 'react';
import styled from 'styled-components'

const TransactionRoot = styled.div`
    margin-button: 6px;
    padding 15px;
    dispay: flex;
    justify-content: space-between;
    background-color: white;
`;

export default ({data, expanded, onClickHandler}) => (
    <TransactionRoot>
        <div>
            { data.name }
            { data.value }
        </div>
        { expanded &&
            <div>
                <button onClick={() => deleteTransaction(data)}>Jsem vidět!!!</button>
            </div>
        }
    </TransactionRoot>
)
