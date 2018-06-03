import React from 'react';
import Overview from '../components/Overview';
import Button from '../components/Button';
import ToggleButtons from '../components/ToggleButtons';
import { connect } from 'react-redux';
import { getOverview } from '../reducers/transaction';
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Content from '../components/Content';

class TransactionOverview extends React.Component {
  render() {
    const { history, overview } = this.props;

    return (
      <React.Fragment>
        <Heading>
          <ToggleButtons buttonNames={["Today", "Monthly", "Overall"]} activeIndex={0} />
        </Heading>
        <Content>
          <Overview overview={overview} />
        </Content>
        <Footer>
          <Button block onClick={() => history.push("/")}>To transactions</Button>
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

export default connect(mapStateToProps)(TransactionOverview);