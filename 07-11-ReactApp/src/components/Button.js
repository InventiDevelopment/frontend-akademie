import styled from 'styled-components';

export default styled.button`
  appearance: none;
  padding: 10px 20px;
  border-style: none;
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  text-decoration: none;
  text-shadow: 0 1px 3px rgba(0,0,0,.2);
  box-shadow: 0 0 8px rgba(0,0,0,.35);
  background: linear-gradient(to top, #977490, #C5A7BF);
  ${({ block }) => block && `
    display: block;
    width: 100%;
  `}
  ${({ icon }) => icon && `
    padding: 5px 15px;
  `}
  ${({ danger }) => danger && `
    background: linear-gradient(to top, #AF4646, #D87777);
  `}
`;