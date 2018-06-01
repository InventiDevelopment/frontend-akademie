import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions'
import { showBalance } from './reducers';

class Balance extends React.Component {
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
    balance: showBalance(store)
  }
}

export default connect(mapStateToProps, { increment })(Balance);