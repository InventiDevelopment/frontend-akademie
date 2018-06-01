import React from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import { faEraser } from '@fortawesome/fontawesome-free-solid'
import TransactionValue from "./TransactionValue";
import Button from "./Button";
import Icon from './Icon';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: white;
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
        <Button icon danger onClick={() => deleteTransaction(data)}>
          <Icon icon={faEraser}/>
        </Button>
      </TransactionRow>
      }
    </TransactionRoot>
  )