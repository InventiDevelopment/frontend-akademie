import React from 'react';
import styled from 'styled-components';

export default ({ buttonNames, onClick = ()=>{}, activeIndex = 0, ...other }) => (
    <ToggleRoot {...other}>
      {buttonNames.map((name, key) => (
        <ToggleButton type="button" active={key === activeIndex} onClick={() => onClick(key)}>{name}</ToggleButton>
      ))}
    </ToggleRoot>
  )