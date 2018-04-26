import React from 'react';
import styled from 'styled-components';
//  import Button from './Button';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;

export default ({data, expanded, toggleExpanded, deleteTransaction}) => (
    <TransactionRoot>
        <li>
            <div onClick={toggleExpanded}>
                { data.name }
                { data.value }
            </div>
            { expanded &&  // když je tohle true, tak mi vykresli to dole
                <div>Jsem vidět
                    <button onClick={() => deleteTransaction(data)}>Smazat</button>
                </div>
            }
        </li>
    </TransactionRoot>
)