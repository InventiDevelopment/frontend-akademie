import React from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import { faEraser } from '@fortawesome/fontawesome-free-solid'
import TransactionValue from "./TransactionValue";
import StyledButton from "./StyledButton";
import StyledIcon from './StyledIcon';

const TransactionRoot = styled.div`
  padding: 10px;
  border: 1px solid #D3E0DF;
  border-radius: 4px;
  background-color: #FFFFFF;
  margin-bottom: 6px
`;

const TransactionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ expanded }) => expanded && `
    margin-top: 10px;
  `}
`;

export default ({ data, expanded, toggleExpanded, deleteTransaction }) => (
  <TransactionRoot onClick={toggleExpanded}>
    <TransactionRow>
      <div>{data.name}</div>
      <TransactionValue type={data.type}>{data.value}</TransactionValue>
    </TransactionRow>
    {expanded &&
    <TransactionRow expanded>
      <div>{format(parse(data.created), 'H:mm DD:MM:YYYY')}</div>
      <StyledButton icon danger onClick={() => deleteTransaction(data)}>
        <StyledIcon icon={faEraser}/>
      </StyledButton>
    </TransactionRow>
    }
  </TransactionRoot>
)
