import React, { Component } from 'react'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import EditForm from './EditForm';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faDelete from '@fortawesome/fontawesome-free-solid/faTrash';
import ConfirmModal from './ConfirmModal';

const EditButton = styled.button`
  text-transform: uppercase;
  padding: 12px;
  font-weight: bold;
  border: 0;
  background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
  border-radius: 10px;
  color: #C1D9C2;
`;

const DelButton = styled.button`
  text-transform: uppercase;
  padding: 12px;
  margin-right: 3px;
  font-weight: bold;
  border: 0;
  margin-left: 5px;
  background-image: linear-gradient(to top, #db8070, #df8373, #e38676, #e88a79, #ec8d7c);
  border-radius: 10px;
  color: #C1D9C2;
`;


export default class TransactionButtons extends Component {
  state={
  closeModalOpen:false,
  editModalOpen: false}

  openDeleteModal = () =>{
    this.setState({closeModalOpen: true})
  }
  closeDeleteModal = () =>{
    this.setState({closeModalOpen: false})
  }

  openEditModal = () =>{
    this.setState({editModalOpen: true})
  }
  closeEditModal = () =>{
    this.setState({editModalOpen: false})
  }

  render() {
    return(
    <div>
      <EditButton onClick = {() => this.openEditModal()}><FontAwesomeIcon icon={faPencil}/></EditButton>
      <DelButton onClick={() => this.openDeleteModal()}><FontAwesomeIcon icon={faDelete}/></DelButton>
      <ConfirmModal deleteTransaction={this.props.deleteTransaction}
                    data={this.props.data}
                    closeDeleteModal={this.closeDeleteModal}
                    closeModalOpen={this.state.closeModalOpen}/>
        <EditForm data={this.props.data}
                  closeModal={this.closeEditModal}
                  modalOpen={this.state.editModalOpen}
                  editTransaction={this.props.editTransaction}
                  newValue={this.props.newValue}/>
    </div>
    )
  }
}