import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalWindow = styled.div`
    padding: 10px;
    height: 400px;
    text-align: center;
    color: white;
    background-image: linear-gradient(44deg,#3550d9,#b430d1);
`;

const ModalButton = styled.div`
    text-align: center;
    margin: 5% auto;
`

const Title = styled.div`
    margin: 10px;
    font-size: 0.9rem;
    text-shadow: 1px 3px 20px rgba(0,0,0,0.2),
    0px -5px 35px rgba(255,255,255,0);
`

const FormButtons = styled.div`
    margin: 40px;

`;

const EachButton = styled.div`
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px;
    margin: 10px auto;
    background-color: white;
    font-size: 1.1rem;

`;

export default class MainModal extends React.Component {
    state = {
        modalOpen: false
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }

    render() {
        return(
            <footer>
                <ModalButton><button onClick={this.openModal}><i class="fas fa-plus-circle"></i></button></ModalButton>
                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} shouldCloseOnOverlayClick={true} className="modal">
                <ModalWindow>
                    <Title><h1>New transaction</h1></Title>
                    <input placeholder="Name"/>
                    <input placeholder="Value"/>
                    <input type="date" />
                    <FormButtons>
                    <EachButton><button>Add</button></EachButton>
                    <EachButton><button>Cancel</button></EachButton>
                    </FormButtons>    
                </ModalWindow>  
                </Modal>
            </footer>
        )
    }
}

