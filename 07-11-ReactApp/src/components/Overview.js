import React from 'react';
import styled from 'styled-components';

const Overview = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: center;
`;

const OverviewButtons = styled.button`
    border: none;
    padding: .3rem .5rem;
    background-color: grey;
    border-radius: 8px;
    text-transform: uppercase;
    margin: 0 .5rem;
`;

export default () => (
    <Overview> 
        <OverviewButtons>Denní</OverviewButtons>
        <OverviewButtons>Měsíční</OverviewButtons>
        <OverviewButtons>Celkem</OverviewButtons>
    </Overview>
)