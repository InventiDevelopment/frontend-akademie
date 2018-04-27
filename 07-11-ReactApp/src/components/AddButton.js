import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  padding: 12px;
  font-weight: bold;
  border: 0;
  background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
  border-radius: 10px;
  color: #E0D3D3;
`
const Footer = styled.footer`
  width: 100%;
  align-items: center;
  height: 15vh;
  position: fixed;
  bottom: 0;
  padding: 20px;
`;

export default class AddButton extends React.Component {
  render () {
    return (
      <Footer>
        <div>
          <Button onClick={() => this.props.openModal()}>Add new</Button>
        </div>
      </Footer>
    )
  }
}