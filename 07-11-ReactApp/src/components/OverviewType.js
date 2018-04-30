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
     font-weight: bold;
     padding: 10px 20px;
     border: 0;
     &:first-of-type {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        border-right: #F1EADE;
        border-right-style: solid;
        border-right-width: 1.5px;
        color: #D2C1C1;
        background-color: #745654;
    }

    &:last-of-type {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        border-left: #F1EADE;
        border-left-style: solid;
        border-left-width: 1.5px;
    }
`;

const Footer = styled.footer`
  width: 100%;
  align-items: center;
  height: 80px;
  position: fixed;
  bottom: 0;
  padding: 20px;
`;

export default class OverviewType extends React.Component {
  render () {
    return (
      <Footer>
        <ButtonDiv>
          <Button>Monthly</Button>
          <Button>Daily</Button>
          <Button>Yearly</Button>
        </ButtonDiv>
      </Footer>
    )
  }
}