import React from 'react';

interface ButtonProps {
  onClearAllIngredients: React.MouseEventHandler;
}

const Button:React.FC<ButtonProps> = (props) => {
  return (
    <button className='btn btn-info' onClick={props.onClearAllIngredients}>clear</button>
  );
};

export default Button;