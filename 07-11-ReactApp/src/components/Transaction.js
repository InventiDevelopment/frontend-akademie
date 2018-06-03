import React from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import TransactionValue from "./TransactionValue";
import Button from "./Button";

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    font-size: 1.1rem;
`;

const TransactionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ expanded }) => expanded && `
  margin-top: 10px;
    `}
`;

const ButtonDngr = styled.button`
    font-size: 0.3rem;
`

export default ({ data, expanded, toggleExpanded, deleteTransaction }) => (
    <TransactionRoot onClick={toggleExpanded}>
      <TransactionRow>
        <div>{data.name}</div>
        <TransactionValue type={data.type}>{data.value}</TransactionValue>
      </TransactionRow>
      {expanded &&
      <TransactionRow expanded>
        <div>{format(parse(data.created), 'H:mm DD:MM:YYYY')}</div>
        <ButtonDngr>
        <Button icon danger onClick= {() => deleteTransaction(data)}>
          Delete
        </Button>
        </ButtonDngr>
      </TransactionRow>
      }
    </TransactionRoot>
  )