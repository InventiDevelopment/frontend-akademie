import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';
import StyledInput from './StyledInput';

const FormRow = styled.div`
  margin-bottom: 10px;
  text-align: left;

  &:last-of-type {
    margin: 80px 0 0 0;
  }
`

export default ({ value, message, type, valueChanged, addTransaction }) => (
  <React.Fragment>
      <FormRow>
        <span>Value</span>
        <StyledInput id="value"
          value={value}
          onChange={valueChanged} />
      </FormRow>
      <FormRow>
        <span>Name</span>
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
        <StyledButton save onClick={addTransaction}>Save</StyledButton>
      </FormRow>
  </React.Fragment>
)
