import React from 'react';
import styled from 'styled-components'

const TransactionRoot = styled.div`
       background: white;
       margin-bottom: 4px;
       padding: 10px;
       display: flex;
       justify-content: space-between;
`;


export default ({ data, expanded}) => (

    <TransactionRoot>
        <div>
            { data.name }
            { data.value }
        </div>

        <div>
            <button className="btn-remove">Remove</button>
        </div>
            { expanded &&
                <div>
                    Jsem videt!!!
                </div>
            }

    </TransactionRoot>

)