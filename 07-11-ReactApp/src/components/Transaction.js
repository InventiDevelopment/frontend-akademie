import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;
/*const SecondRow = styled.div`
    border: 1px solid black;

`;*/

export default ({data, expanded, toggleExpanded, deleteTransaction}) => (
    <TransactionRoot onClick={toggleExpanded}>
        <div>
            { data.name }
        </div>
        <div>
            { data.value }
        </div>
        { expanded &&  // když je tohle true, tak mi vykresli to dole
                <Button action={deleteTransaction} data={data} />
        }
    </TransactionRoot>
)