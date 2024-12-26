import React from 'react';
import ButtonProps from './Types/ButtonProps';
import styled from 'styled-components';

const Button = ({ onClick, label } : ButtonProps) => {

  const size : string = '3.3em';

  let isNumeric : boolean = false;
  let isC : boolean = false;

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
    isNumeric = true;
  }

  if (!isC && String(label) === 'C') {
    isC = true;
  }

  return (
    <StyledButton onClick={ onClick }>{ label }</StyledButton>
  )
}

export default Button;