import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { faArrowAltCircleLeft } from '@fortawesome/fontawesome-free-regular';
import StyledIcon from '../components/StyledIcon'; 
import TransactionOverview from '../components/TransactionOverview';
import StyledButton from '../components/StyledButton';
import ToggleButtons from '../components/ToggleButtons';
import { connect } from 'react-redux';
import { getOverview } from '../reducers/transactions';
import transaction from '../data/transactions.json';
import { setMonthVisibility } from '../actions/index';

const onChange = new Date().getMonth(transaction.created, 0);
class Overview extends Component {
  onChange = (event) => {
    console.log(event)
    this.props.setMonthVisibility( parseInt(event.target.value) )
  }

  render() {
    const { history, overview } = this.props;    

    return (
      <React.Fragment>
        <Header centered>
          <ToggleButtons buttonNames={["Today", "Monthly", "Overall"]} activeIndex={1} />
        </Header>
        <Content>
          <TransactionOverview overview={overview} onChangeHandlerFromParent={this.onChange}/>
        </Content>
        <Footer>
          <StyledButton add onClick={() => history.push("/")}><StyledIcon icon={faArrowAltCircleLeft} /></StyledButton>
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

export default connect(mapStateToProps, { setMonthVisibility })(Overview);
