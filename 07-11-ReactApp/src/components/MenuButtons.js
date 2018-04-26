import React, {Component} from 'react';
import styled from 'styled-components';

const MenuRoot = styled.div`
   background-color: #F1EADE;
   height: 11vh;
   font-weight: bold;
   align-items: center;
   display: flex;
   text-align: center;
   a {text-decoration: none;
      color: #333333;}
`;


let MenuItem = styled.div`
  width: 100%;
  padding: 12px;
  font-weight: bold;
  border: 0;
  flex: 50%;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;`;




export default class MenuButtons extends Component {
  render() {
    return(
    <MenuRoot>
      <MenuItem><a href="/index.html">Transactions</a></MenuItem>
      <MenuItem><a href="/overview.html">Overview</a></MenuItem>
    </MenuRoot>
    )
  }
}