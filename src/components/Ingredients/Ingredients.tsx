import React from 'react';
import Ingredient from "./Ingredient";
import {IngredientCount} from "../../types";

interface Props {
  ingredients: IngredientCount[];
}

const Ingredients: React.FC<Props> = ({ingredients}) => {

  const arr: JSX.Element[] = [];

  ingredients.forEach((ingredient) => {
    for (let i = 0; i < ingredient.count; i++) {
      arr.push(
        <Ingredient
          key={Math.random() * 20000}
          name={ingredient.name}
          count={ingredient.count}
        />
      )
    }
  });

  return (
    <>
      {arr}
    </>
  );
};

export default Ingredients;