import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
     width: 100%;
     background-color: #D2C1C1;
     color: #745654;
     text-transform: uppercase;
     padding: 12px;
     font-weight: bold;
     border: 0;
     &:first-of-type {
        margin-left: 20px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        border-right: $menu-bg;
        border-right-style: solid;
        border-right-width: 1.5px;
        color: #D2C1C1;
        background-color: #745654;
    }

    &:last-of-type {
        margin-right: 20px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        border-left: $menu-bg;
        border-left-style: solid;
        border-left-width: 1.5px;
    }
`;

export default () => (
  <ButtonDiv>
    <Button>All</Button>
    <Button>Income</Button>
    <Button>Expense</Button>
  </ButtonDiv>
)