import React from 'react';
import months from '../data/months';
import styled from 'styled-components';

const MonthDiv = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const Select = styled.select`
        -webkit-appearance: button;
        -moz-appearance: button;
        background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
        border: 0;
        border-radius: 10px;
        color: #E0D3D3;
        padding: 15px;
        text-transform: uppercase;
        font-weight: bold;
        text-align-last: center;
                
`
const Option = styled.option`
  color: #A38280;
  background-color: #F5F1E9;
`

export default class SelectMonth extends React.Component{
  render(){
    return(
      <MonthDiv>
        <Select>
          {
            months.map((month) =>
              <Option value={month}>{month}</Option>
            )
          }
        </Select>
      </MonthDiv>
    )
  }
}