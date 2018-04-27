import React from 'react';
import styled from 'styled-components';
import OverviewText from './OverviewText'
import OverviewType from './OverviewType'
import SelectMonth from './SelectMonth'

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

export default class Overview extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Section>
          <Line/>
          <SelectMonth/>
          <OverviewText stateTransactions={this.props.stateTransactions}/>
        </Section>
        <OverviewType/>
      </React.Fragment>
    )
  }
}