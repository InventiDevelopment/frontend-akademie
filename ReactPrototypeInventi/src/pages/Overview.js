import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import TransactionOverview from '../components/TransactionOverview';
import overview from '../data/overview';
import StyledButton from '../components/StyledButton';
import ToggleButtons from '../components/ToggleButtons';

export default ({ history }) => (
  <React.Fragment>
    <Header centered>
      <ToggleButtons buttonNames={["Today", "Monthly", "Overall"]} activeIndex={1}/>
    </Header>
    <Content>
      <TransactionOverview overview={overview} />
    </Content>
    <Footer>
      <StyledButton block onClick={() => history.push("/")}>To homepage</StyledButton>
    </Footer>
  </React.Fragment>
)