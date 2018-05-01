import React from 'react';
import '../scss/app.css';
import styled from 'styled-components';

const TransactionRoot = styled.div`
    margin-bottom: 6px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
    background-color: #009faf;
=======
    background-color: white;
>>>>>>> 793a2ae98ee0071af58408129ec3113499184140
`;

export default ({ data, expanded, toggleExpanded, deleteTransaction }) => (
    <TransactionRoot>
        <div onClick={toggleExpanded}>
            {data.name}
            {data.value}
        </div>
<<<<<<< HEAD
        { expanded &&
            <button className="select-option-button" onClick={() => deleteTransaction(data)}><i class="fas fa-trash-alt"></i></button>
        }
    </TransactionRoot>
)
=======
        {expanded &&
            <button onClick={() => deleteTransaction(data)}>Smazat</button>
        }
    </TransactionRoot>
)
>>>>>>> 793a2ae98ee0071af58408129ec3113499184140
