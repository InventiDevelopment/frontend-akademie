import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview, month}) => (
  <React.Fragment>
    <SelectMonth month={month}/>
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
