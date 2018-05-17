import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
     width: 33%;
     background-color: #D2C1C1;
     color: #745654;
     text-transform: uppercase;
     padding: 10px 10px;
     font-weight: bold;
     border: 0;
     &:first-of-type {
        margin-left: 20px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        border-right: #F1EADE;
        border-right-style: solid;
        border-right-width: 1.5px;
    }

    &:last-of-type {
        margin-right: 20px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        border-left: #F1EADE;
        border-left-style: solid;
        border-left-width: 1.5px;
    }
    ${({active}) => active && ` 
      color: #D2C1C1;
      background-color: #745654;
  `}
    
`;
let activeIndex = 0;
export default class FilterButton extends React.Component{
  setActive = (key) => {
    activeIndex = key
  }
  setVisibility = (key) => {
    this.props.setTransactionVisibility(key)
    this.setActive(key)

}
  render(){
    return(
      <ButtonDiv>
        {this.props.buttonNames.map((name, key) => (
          <Button  active={activeIndex === key} onClick={() => this.setVisibility(key)}>{name}</Button>
        ))}
      </ButtonDiv>
    )
  }
}
