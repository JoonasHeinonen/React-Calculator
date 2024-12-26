import React from 'react';
import DisplayProps from './Types/DisplayProps';
import StyledDisplay from './Styles/StyledDisplay';
import StyledResult from './Styles/StyledResult';

const Display = ({ elems } : DisplayProps) => {
  return (
    <StyledDisplay>
      <StyledResult>{ elems }</StyledResult>
    </StyledDisplay>
  );
}

export default Display;