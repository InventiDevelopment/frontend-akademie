import styled from 'styled-components';

export default styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: fixed;
  height: 70px;
  top: 0;

  ${({ centered }) => centered && `
    justify-content: center;
  `}
`;
