import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalWindow = styled.div`
    height: 100px;
    text-align: center;
    color: black;
    background-image: linear-gradient(to bottom left, #2BD3C9, #2786E2);
`;

const ModalButton = styled.div`
    text-align: center;
    margin: 5% auto;
`

const Title = styled.div`
    font-size: 0.9rem;
`

const FormButtons = styled.div`
    margin: 40px;
    display: flex;
    justify-content: space-between;
`;

const EachButton = styled.div`
    border: 1px solid black;
    padding: 10px;
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
                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
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