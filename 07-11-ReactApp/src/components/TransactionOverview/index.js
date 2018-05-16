import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview, monthSelected }) => (
  <React.Fragment>
    <SelectMonth month={monthSelected}/>
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
