import React from 'react';
import './Ingredient.css';

interface Ingredient {
  name: string;
}

const Ingredient:React.FC<Ingredient> = (props) => {
  return (
    <div className={props.name}>
    </div>
  );
};

export default Ingredient;