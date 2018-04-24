import React, {Component} from 'react';
import Transaction from './Transaction';

export default class TransactionContainer extends Component {
  state = { expanded: false}
  clickHandler = () => {
    this.setState({expanded:!this.state.expanded})
  }
  render () {
    const {data} = this.props
    return(
    <div onClick={this.clickHandler}>
      <Transaction data = {data} expanded={this.state.expanded}/>
    </div>
    )

  }
}

