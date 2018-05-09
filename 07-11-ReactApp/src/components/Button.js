import React from 'react';
import styled from 'styled-components';

const ButtonRoot = styled.button`
    display: block;
    background-image: none;
    background-color: lightgreen;
    color: green;
    border: 2px solid green;
    border-radius: 5px;
    margin: 5pt;
    padding: 10pt;
`

export default ({action, data}) => (
    <ButtonRoot>
        <button onClick={()=>action(data)}>Smazat</button>
    </ButtonRoot>
)