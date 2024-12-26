import React, { useState } from 'react';
import ButtonProps from './Types/ButtonProps';
import styled from 'styled-components';

const Button = ({ onClick, label } : ButtonProps) => {
  const [isNumeric, setIsNumeric] = useState(false);
  const [isC, setIsC] = useState(false);

  const size = '3.3em';

  const StyledButton = styled.button`
    background-color: ${() => isNumeric ? 'DarkSlateGray' : 'Gray'};
    color: ${() => isC ? 'Orange' : 'White'};
    font: 2em bold;
    border: 1px solid white;
    min-width: ${ size };
    min-height: ${ size };
  `;

  // Check if the label is numeric
  if (!isNumeric && !isNaN(Number(label))) {
    setIsNumeric(true);
  }

  if (!isC && String(label) === 'C') {
    setIsC(true);
  }

  return (
    <StyledButton onClick={ onClick }>{ label }</StyledButton>
  )
}

export default Button;