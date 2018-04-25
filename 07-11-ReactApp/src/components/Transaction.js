import React from 'react';
import styled from 'styled-components';

const ButtonRemove = styled.button`
  font-size: .9rem;
  color: grey;
  border: none;
  border-radius: 8px;
  padding: .3rem .5rem;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: .5rem 0;
  display: flex;
  justify-content: flex-end;
`;

export default ({ data, expanded }) => (
    <div>
        <div>
            { data.name }
            { data.value }
        </div>
        {
            expanded &&
            <Wrapper>
                <ButtonRemove>Smazat</ButtonRemove>
            </Wrapper>
        }
    </div>
)

