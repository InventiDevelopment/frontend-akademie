import React, { Component } from 'react';
import TransactionOverview from '../components/TransactionOverview';
import Button from '../components/Button';
import ToggleButtons from '../components/ToggleButtons';
import { connect } from 'react-redux';
import { getOverview } from '../reducers/transactions';

class Overview extends Component {
  render() {
    const { history, overview } = this.props;

    return (
      <React.Fragment>
        <Header centered>
          <ToggleButtons buttonNames={["Today", "Monthly", "Overall"]} activeIndex={1} />
        </Header>
        <Content>
          <TransactionOverview overview={overview} />
        </Content>
        <Footer>
          <Button block onClick={() => history.push("/")}>To homepage</Button>
        </Footer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    overview: getOverview(store)
  }
}

export default connect(mapStateToProps)(Overview);