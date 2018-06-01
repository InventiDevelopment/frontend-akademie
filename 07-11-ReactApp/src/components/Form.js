import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Select from './Select';
import Input from './Input';

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
      <Input id="value"
        value={value}
        onChange={valueChanged} />
    </FormRow>
    <FormRow>
      <span>Message</span>
      <Input id="message"
        value={message}
        onChange={valueChanged} />
    </FormRow>
    <FormRow>
      <span>Type</span>
      <Select id="type"
        value={type}
        onChange={valueChanged} >
        <option>income</option>
        <option>expense</option>
      </Select>
    </FormRow>
    <FormRow>
      <Button onClick={addTransaction}>Add</Button>
    </FormRow>
  </React.Fragment>
)