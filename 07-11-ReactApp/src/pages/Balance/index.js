import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
import { getBalance } from './reducers';


class Balance extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.increment}>ahojy</button>
                <bold>{ this.props.balance }</bold>
            </div>
        ) 
    }
}

const mapStateToProps = store => {
    return {
        balance: getBalance (store)
    }
}

export default connect(null, { increment })(Balance);