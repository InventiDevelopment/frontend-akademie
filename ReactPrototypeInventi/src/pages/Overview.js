import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import TransactionOverview from '../components/TransactionOverview';
import StyledButton from '../components/StyledButton';
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
          <StyledButton block onClick={() => history.push("/")}>To homepage</StyledButton>
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
