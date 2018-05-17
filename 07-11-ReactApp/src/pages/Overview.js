import React from 'react';
import styled from 'styled-components';
import SelectMonth from '../components/SelectMonth';
import OverviewTotal from '../components/OverviewTotal';
import OverviewButtons from '../components/OverviewButtons';
import {connect} from 'react-redux';
import {setSelectedMonth, setTransactionTimePeriod} from '../actions'
import { getOverview } from '../reducers/transactions';
import {periodVisibilityFilter} from '../reducers/filter'

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

  setTransactionPeriod = (index) => {
    this.props.setTransactionTimePeriod(index);
  }

  render(){
    return(
      <React.Fragment>
        <Section>
          <Line/>
          <OverviewTotal overview={this.props.overview}/>
          {this.props.index === 0?<SelectMonth newValue={this.newValue} setMonth={this.setMonth}/>:
          <div></div>}
        </Section>
        <OverviewButtons buttonNames={["Monthly", "Daily", "Yearly"]} onClick ={this.setTransactionPeriod}/>
      </React.Fragment>
    )
  }
}


const mapStateToProps = store => {
  return {
    overview: getOverview(store),
    index: (periodVisibilityFilter(store) === undefined) ? 0 : periodVisibilityFilter(store)
  }
}

export default connect(mapStateToProps, {setSelectedMonth, setTransactionTimePeriod})(Overview);