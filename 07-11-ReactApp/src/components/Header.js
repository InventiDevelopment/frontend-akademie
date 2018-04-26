import React from 'react';
import styled from 'styled-components';
import TotalBalance from './TotalBalance';
import NavBar from './MenuButtons';
import FilterButton from './FilterButton';

const Header = styled.header`
  position: fixed;
  height: 22vh;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  margin-bottom: 100px;
`

export default () => (
  <Header>
    { <NavBar/> }
    { <TotalBalance/> }
    { <FilterButton/> }
  </Header>
)