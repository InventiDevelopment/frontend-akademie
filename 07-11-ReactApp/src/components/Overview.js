import React from 'react';
import styled from 'styled-components';
import transactions from '../data/transactions';

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

const getMonth = transactions.created;

export default () => (
    onChange(event) {
        this.setState({value: event.target.value});
      }


    <Overview>
        <OverviewButtons>Denní</OverviewButtons>
        <OverviewButtons>Měsíční</OverviewButtons>
        <OverviewButtons>Celkem</OverviewButtons>
    </Overview>
)