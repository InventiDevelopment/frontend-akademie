import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import TransactionOverview from '../components/TransactionOverview';
import StyledButton from '../components/StyledButton';
import ToggleButtons from '../components/ToggleButtons';
import { connect } from 'react-redux';
import transactions, { getOverview } from '../reducers/transactions';
import transaction from '../data/transactions.json';
import getMonth from 'date-fns';


const setMonth = new Date().getMonth(transaction.created, 0);
class Overview extends Component {
  setMonth = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

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
