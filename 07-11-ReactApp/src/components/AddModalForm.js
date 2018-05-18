import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faClose from '@fortawesome/fontawesome-free-solid/faTimes'
import styled from 'styled-components'

const ModalInside = styled.div`
    background-color: #F1EADE;
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
`

const FormItem = styled.div`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
`
const ModalInput = styled.input`
  border-radius: 10px;
  width: 100%;
  padding: 8px 0;
  background-color: rgb(250, 247, 239);
  margin: 10px 0;
  border: 0;
`
const ModalButton = styled.div`
  padding-top: 25px;
  text-align: right;
`
const SaveButton = styled.button`
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    border: 0;
    background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
    color: #F1EADE;
    border-radius: 10px;
`
const CloseButton = styled.button`
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    border: 0;
    background-image: linear-gradient(to top, #db8070, #df8373, #e38676, #e88a79, #ec8d7c);
    color: #F1EADE;
    border-radius: 10px;
    margin-left: 5px;
`
const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;
  width: 100%;
  padding: 8px 0;
  margin-top: 10px;
  background-color: rgb(250, 247, 239);
  border: 0;
  border-radius: 10px;
  text-align-last: center;
 `

export default({name, value, type, created, newValue, addTransaction, closeModal}) => (
  <ModalInside>
    <FormItem>
      <label>Name</label>
      <ModalInput id="name" onChange={newValue} value={name} type="text"></ModalInput>
    </FormItem>
    <FormItem>
      <label>Value</label>
      <ModalInput id="value" onChange={newValue} value={value} type="number"/>
    </FormItem>
    <FormItem>
      <label>Date created</label>
      <ModalInput id="created" onChange={newValue} value={created} type="datetime-local"></ModalInput>
    </FormItem>
    <FormItem>
      <span>Type</span>
      <Select id="type" onChange={newValue} value={type}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </Select>
    </FormItem>
    <ModalButton>
      <SaveButton onClick={addTransaction}>Save</SaveButton>
      <CloseButton onClick={closeModal}><FontAwesomeIcon icon={faClose}/></CloseButton>
    </ModalButton>
  </ModalInside>
)