import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment } from './actions'
import { getBalance } from './reducers';

class Balance extends Component {
  render() {
    const { increment, balance } = this.props;

    return (
      <div>
        <button onClick={ increment }>Ahoj</button>
        <bold>{ balance }</bold>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    balance: getBalance(store)
  }
}

export default connect(mapStateToProps, { increment })(Balance);
