import React from 'react';
import styled from 'styled-components';
import OverviewText from './OverviewText'
import OverviewType from './OverviewType'
import SelectMonth from './SelectMonth'

const Section = styled.section`
  margin-top: 11vh;
  height: 74vh;
`

export default class Overview extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Section>
          <SelectMonth/>
          <OverviewText stateTransactions={this.props.stateTransactions}/>
        </Section>
        <OverviewType/>
      </React.Fragment>
    )
  }
}