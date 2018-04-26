import React, { Component } from 'react'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faDelete from '@fortawesome/fontawesome-free-solid/faTrash';
import TransactionContainer from './TransactionContainer'

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
  render() {
    return(
    <div>
      <EditButton><FontAwesomeIcon icon={faPencil}/></EditButton>
      <DelButton onClick={() => this.deleteElement.bind(TransactionContainer.key) }><FontAwesomeIcon icon={faDelete}/></DelButton>
    </div>
    )
  }
}