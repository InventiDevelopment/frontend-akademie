import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview, setMonth, month }) => (
  <React.Fragment>
    <SelectMonth onChange={setMonth} month={month} />
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
