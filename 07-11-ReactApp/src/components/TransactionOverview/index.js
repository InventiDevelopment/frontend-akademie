import React from 'react';
import SelectMonth from './SelectMonth';
import OverviewTotal from './OverviewTotal';

export default ({ overview, onChangeHandlerFromParent }) => (
  <React.Fragment>
    <SelectMonth onChangeHandlerFromParent={onChangeHandlerFromParent}/>
    <OverviewTotal overview={overview}/>
  </React.Fragment>
)
