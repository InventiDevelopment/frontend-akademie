import React from 'react';


export default (props) => {
    const {transaction} = props;
    return (
        <div>
            {transaction.name}
            {transaction.value}
        </div>
)

}