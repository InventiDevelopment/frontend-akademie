import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';
import StyledInput from './StyledInput';

const FormRow = styled.div`
  margin-bottom: 10px;
  text-align: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default ({ value, message, type, valueChanged, addTransaction }) => (
  <React.Fragment>
    <FormRow>
      <span>Value</span>
      <StyledInput id="value"
        value={value}
        onChange={valueChanged} />
    </FormRow>
    <FormRow>
      <span>Message</span>
      <StyledInput id="message"
        value={message}
        onChange={valueChanged} />
    </FormRow>
    <FormRow>
      <span>Type</span>
      <StyledSelect id="type"
        value={type}
        onChange={valueChanged} >
        <option>income</option>
        <option>expense</option>
      </StyledSelect>
    </FormRow>
    <FormRow>
      <StyledButton onClick={addTransaction}>Add</StyledButton>
    </FormRow>
  </React.Fragment>
)
