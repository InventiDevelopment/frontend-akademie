import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100%;
  text-transform: uppercase;
  padding: 10px 20px;
  font-weight: bold;
  border: 0;
  background-image: linear-gradient(to top, #a38280, #a98886, #b08f8d, #b69593, #bd9c9a);
  border-radius: 10px;
  color: #E0D3D3;
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  padding: 20px;
  bottom: 0;
`;
const ButtonDiv = styled.div`
  width: 100%;
`;

export default ({openModal}) => (
      <Footer>
        <ButtonDiv>
          <Button block onClick={openModal}>Add new</Button>
        </ButtonDiv>
      </Footer>
)