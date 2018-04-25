import React from 'react';
import TransactionItem from "./TransactionItem";


class TransactionContainer extends React.Component {
    state = { deleted: false }
    clickHandler = () => {
        console.log("bagr")
        this.setState({ deleted: !this.state.deleted })
    }

    render(){
        const {transaction} = this.props;

        return (
            <div>
            {!this.state.deleted &&
            <div onClick={this.clickHandler}>
            <TransactionItem transaction={transaction}/>
            </div>
            }
            </div>
        )
    }

}

export default TransactionContainer;