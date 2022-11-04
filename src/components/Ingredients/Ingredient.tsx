import React from 'react';
import './Ingredient.css';

interface IngredientProps {
  name: string;
  count: number;
}

const Ingredient:React.FC<IngredientProps> = (props) => {
  return (
    <div className={props.name}>
    </div>
  );
};

export default Ingredient;