import React from 'react';
<<<<<<< HEAD

export default () => (
  <div>asdff</div>
=======
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
        <OverviewButtons>Denni</OverviewButtons>
        <OverviewButtons>Mesicni</OverviewButtons>
        <OverviewButtons>Celkem</OverviewButtons>
    </Overview>
>>>>>>> 793a2ae98ee0071af58408129ec3113499184140
)