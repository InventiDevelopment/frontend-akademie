import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import faClose from '@fortawesome/fontawesome-free-solid/faTimes';
import styled from 'styled-components';
import moment from 'moment/moment'


const ModalInside = styled.div`
   background-color: #F1EADE;
   padding: 15px;
   margin: 15px;
   border-radius: 10px;
`

const customModal = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    bottom                : '0',
    'background-color'      : 'rgba(0, 0, 0, .5)',
  }
}

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

export default class EditForm extends React.Component{
  saveAction = (transaction, title, val, created) => {
    this.props.closeModal()
    const date = moment(new Date(created)).format(created.format || 'HH:mm DD. MM. YYYY')
    this.props.editTransaction(transaction, title, val, created)
  }

  render(){
    const {newValue, editTransaction, closeModal, data, modalOpen} = this.props
    return(
      <Modal isOpen={modalOpen} style={customModal}>
        <ModalInside>
          <FormItem>
            <label>Name</label>
            <ModalInput id="name" onChange={newValue}
                        defaultValue={data.name} type="text>"></ModalInput>
          </FormItem>
          <FormItem>
            <label>Value</label>
            <ModalInput id="value" onChange={newValue}
                        defaultValue={data.value} type="number"></ModalInput>
          </FormItem>
          <FormItem>
            <label>Date created</label>
            <ModalInput id="created" onChange={newValue} defaultValue={data.created}  type="datetime-local"></ModalInput>
          </FormItem>
          <FormItem>
            <span>Type</span>
            <Select id="type" onChange={newValue} defaultValue={data.type}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Select>
          </FormItem>
          <ModalButton>
            <SaveButton onClick={() => this.saveAction(data, data.name, data.value, data.created)}>Save</SaveButton>
            <CloseButton onClick={closeModal}><FontAwesomeIcon icon={faClose}/></CloseButton>
          </ModalButton>
        </ModalInside>
      </Modal>

    )
  }
}
