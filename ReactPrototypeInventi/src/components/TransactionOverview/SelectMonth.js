import React from 'react';
import styled from 'styled-components';
import months from '../../data/months';
import StyledSelect from '../StyledSelect';

const SelectMonthRoot = styled.div`
  text-align: center;
`;

const SelectMonthLabel = styled.label`
  margin-right: 10px;
`;

export default ({ onChange, value }) => (
  <SelectMonthRoot class="select-month">
    <SelectMonthLabel>Current Month:</SelectMonthLabel>
    <StyledSelect class="input" onChange={onChange} value={value}>
      {months.map((month, key) => (
        <option key={key} value={month.value}>{ month.name }</option>
      ))}
    </StyledSelect>
  </SelectMonthRoot>
)