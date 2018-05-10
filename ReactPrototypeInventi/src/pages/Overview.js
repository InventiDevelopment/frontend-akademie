import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import TransactionOverview from '../components/TransactionOverview';
import StyledButton from '../components/StyledButton';
import ToggleButtons from '../components/ToggleButtons';
import { getTransactionOverviewInMonth } from '../reducers/transactions';
import { setOverviewMonth } from '../actions';
import { getOverviewMonth } from '../reducers/filter';

class Overview extends Component {
  render() {
    const { history, overview, overviewMonth } = this.props;

    return (
      <React.Fragment>
        <Header centered>
          <ToggleButtons buttonNames={["Today", "Monthly", "Overall"]} activeIndex={1} />
        </Header>
        <Content>
          <TransactionOverview overview={overview} month={overviewMonth} setMonth={event => this.props.setOverviewMonth(event.target.value)} />
        </Content>
        <Footer>
          <StyledButton block onClick={() => history.push("/")}>To homepage</StyledButton>
        </Footer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    overview: getTransactionOverviewInMonth(state),
    overviewMonth: getOverviewMonth(state)
  }
}

export default connect(mapStateToProps, { setOverviewMonth })(Overview);
