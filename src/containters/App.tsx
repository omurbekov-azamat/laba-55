import React, {useState} from 'react';
import {Menu} from "../types";
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import Pages from "../components/Pages/Pages";
import './App.css'
import Ingredients from "../components/Ingredients/Ingredients";
import Price from "../components/Price/Price";

const menu: Menu[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const getCount = (index: number) => {
    const ingredientCopy = {...ingredients[index]};
    return ingredientCopy.count;
  };

  const addSomeIngredients = (index:number) => {
    const ingredientsCopy = [...ingredients];
    const ingredientCopy = {...ingredients[index]};
    ingredientCopy.count++;
    ingredientsCopy[index] = ingredientCopy;
    setIngredients(ingredientsCopy);
  };

  const removeSomeIngredients = (index: number) => {
    const ingredientsCopy = [...ingredients];
    const ingredientCopy = {...ingredients[index]};
    if (ingredientCopy.count > 0) {
      ingredientCopy.count--;
    }
    ingredientsCopy[index] = ingredientCopy;
    setIngredients(ingredientsCopy);
  };

  const getTotalPrice = ingredients.reduce((acc, ingredient, currentIndex) => {
    if (currentIndex === 0) {
      return acc + 30 + menu[currentIndex].price * ingredient.count;
    }
    return acc + menu[currentIndex].price * ingredient.count;
  },0);


  return (
    <div className='my-container d-flex justify-content-between'>
      <Pages pages={menu} count={getCount} addSomeIngredients={addSomeIngredients} removeSomeIngredients={removeSomeIngredients}/>
      <div className="Burger bg-white">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <Ingredients ingredients={ingredients}/>
        <div className="BreadBottom"></div>
      </div>
      <Price price={getTotalPrice}/>
    </div>
  );
}

export default App;
