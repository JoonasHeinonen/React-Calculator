import React from 'react';
import DisplayProps from './Types/DisplayProps';

const Display = ({ elems } : DisplayProps) => {
  return (
    <div>
      <p>{ elems }</p>
    </div>
  );
}

export default Display;