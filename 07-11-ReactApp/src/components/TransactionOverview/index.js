import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview, setNewMonthSelected }) => (
  <React.Fragment>
    <SelectMonth setNewMonthSelected={setNewMonthSelected} />
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
