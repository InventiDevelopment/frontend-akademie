import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import faClose from '@fortawesome/fontawesome-free-solid/faTimes';
import styled from 'styled-components';


const ModalInside = styled.div`
    background-color: #F1EADE;
    padding: 20px;
    margin: 30px;
    margin-top: 20vh;
    border-radius: 10px;
`
const customStyles = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    bottom                : '0',
    'background-color'      : 'rgba(0, 0, 0, .5)',
  }
};
const FormItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
`
const ModalInput = styled.input`
  border-radius: 10px;
  background-color: rgb(250, 247, 239);
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
  padding: 5px;
  background-color: rgb(250, 247, 239);
  border: 0;
  border-radius: 10px;
  text-align-last: center;
`

export default class EditModal extends React.Component {
  state = {name: this.props.data.name,
    type: this.props.data.type,
    value: this.props.data.value,
    created: this.props.data.created}

  closeClickHandler =() => {
    this.props.closeEditModal();
    this.setState({type: 'income'})
    console.log(this.state.name)
  }

  saveActions = () => {
    this.props.editTransaction(this.props.data, this.state.name,this.state.value, this.state.type,this.state.created)
    this.setState({type: 'income'})
    this.props.closeEditModal()
  }

  saveClickHandler =() => {
    this.state.name && this.state.value && this.state.created !== null?
      this.saveActions(): alert("Please fill out all the fields")
  }

  render () {
    return(
      <Modal  isOpen={this.props.editModalOpen} style={customStyles}>
        <ModalInside>
          <FormItem>
            <label>Name</label>
            <ModalInput onChange={event => this.setState({name: event.target.value})}
                        defaultValue={this.props.data.name} type="text>"></ModalInput>
          </FormItem>
          <FormItem>
            <label>Value</label>
            <ModalInput onChange={event => this.setState({value: event.target.value})}
                        defaultValue={this.props.data.value} type="number"></ModalInput>
          </FormItem>
          <FormItem>
            <label>Date created</label>
            <ModalInput onChange={event => this.setState({created: event.target.value})} type="datetime-local"></ModalInput>
          </FormItem>
          <FormItem>
            <span>Type</span>
            <Select onChange={event => this.setState({type: event.target.value})} defaultValue={this.props.data.type}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Select>
          </FormItem>
          <ModalButton>
            <SaveButton onClick={()=> this.saveClickHandler()}>Save</SaveButton>
            <CloseButton onClick={()=> this.closeClickHandler()}><FontAwesomeIcon icon={faClose}/></CloseButton>
          </ModalButton>
        </ModalInside>
      </Modal>
    )
  }
}
