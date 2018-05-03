import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview }) => (
  <React.Fragment>
    <SelectMonth />
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
