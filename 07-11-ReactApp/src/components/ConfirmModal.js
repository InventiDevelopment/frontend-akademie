import React from 'react';
import Modal from 'react-modal';
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

const Text = styled.div`
  text-align: center
`
const Buttons = styled.div`
    text-align: center;
    padding-top: 30px;
`
const Yes = styled.button`
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    border: 0;
    background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
    color: #F1EADE;
    border-radius: 10px;
    margin-right: 40px;
`
const No = styled.button`
    text-transform: uppercase;
    padding: 12px;
    font-weight: bold;
    border: 0;
    background-image: linear-gradient(to top, #db8070, #df8373, #e38676, #e88a79, #ec8d7c);;
    color: #F1EADE;
    border-radius: 10px;
`

export default class ConfirmModal extends React.Component{
  yesClickHandler =() => {
    this.props.deleteTransaction(this.props.data);
    this.props.closeDeleteModal();
  }
      render () {
      return(
        <Modal  isOpen={this.props.closeModalOpen} style={customStyles}>
          <ModalInside>
            <Text>Do you really wish to delete this transaction?</Text>
            <Buttons>
              <Yes onClick={()=> this.yesClickHandler()}>Yes</Yes>
              <No onClick={()=> this.props.closeDeleteModal()}>No</No>
            </Buttons>
          </ModalInside>
        </Modal>
    )
  }
}