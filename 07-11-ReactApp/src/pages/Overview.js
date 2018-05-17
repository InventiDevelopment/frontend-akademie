import React from 'react';
import styled from 'styled-components';
import OverviewType from '../components/OverviewType';
import SelectMonth from '../components/SelectMonth';
import OverviewTotal from '../components/OverviewTotal';
import {connect} from 'react-redux';
import {setSelectedMonth} from '../actions'
import { getOverview } from '../reducers/transactions';

const Section = styled.section`
  margin-top: 11vh;
  height: 74vh;
`
const Line = styled.div`
  border-top: #A38280;
  border-top-style: solid;
  border-top-width: 3px;
  margin-left: 50%;
`
class Overview extends React.Component {

  setMonth = (month) => {
    this.props.setSelectedMonth(month);
  }

  render(){
    return(
      <React.Fragment>
        <Section>
          <Line/>
          <OverviewTotal overview={this.props.overview}/>
          <SelectMonth newValue={this.newValue} setMonth={this.setMonth}/>
        </Section>
        <OverviewType/>
      </React.Fragment>
    )
  }
}


const mapStateToProps = store => {
  return {
    overview: getOverview(store),
  }
}

export default connect(mapStateToProps, {setSelectedMonth})(Overview);