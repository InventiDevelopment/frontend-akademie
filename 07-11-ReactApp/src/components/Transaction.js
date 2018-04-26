import React from "react";
import styled from "styled-components";

const TransactionRoot = styled.div`
    margin-bottom: 15px;
    padding: 10px;
`;

export default ({ data, expanded }) => (
    <TransactionRoot>
        <div>
            { data.name }
            { data.value }
        </div>
        { expanded &&
           <button onClick={deleteTransaction}>Jsem vidět!!</button> 
        }  
    </TransactionRoot>
)