import React from 'react';
import ButtonProps from './Types/ButtonProps';

const Button = ({ onClick, label } : ButtonProps) => {
  return (
    <button onClick={ onClick }>{ label }</button>
  )
}

export default Button;