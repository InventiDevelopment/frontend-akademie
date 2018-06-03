import styled from 'styled-components';

export default styled.button`
  appearance: none;
  padding: 10px 20px;
  border-style: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-decoration: none;
  box-shadow: 2px 2px 40px 13px #FFFFFF;
  background: #6bbcfa;
  ${({ block }) => block && `
    display: block;
    width: 100%;
  `}
  ${({ icon }) => icon && `
    padding: 5px 15px;
  `}
  ${({ danger }) => danger && `
    background: #cc0000;
  `}
`;