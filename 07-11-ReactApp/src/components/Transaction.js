import React from 'react';
import styled from 'styled-components';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`;
/*
export default (props) => (
    <li>
        { props.data.name }
        { props.data.value }
    </li>
)
*/
export default ({data, expanded}) => (
    <TransactionRoot>
        <li>
            <div>
            { data.name }
            { data.value }
            </div>
            { expanded &&  // když je tohle true, tak mi vykresli to dole
                <div>Jsem vidět</div>
            }
        </li>
    </TransactionRoot>
)