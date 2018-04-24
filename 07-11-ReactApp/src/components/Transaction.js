import React from 'react';
import styled from 'styled-components';

const TransactionRoot = styled.div`
margin-bottom: 6px;
padding: 15px;
display: flex;
justify-content: space-between;
background-color: white;
`;

export default ({ data, expanded }) => (
    <div>
        <div>
            { data.name }
            { data.value }
        </div>
        {
            expanded &&
            <div>Jsem videt!!!</div>
        }
    </div>
)

