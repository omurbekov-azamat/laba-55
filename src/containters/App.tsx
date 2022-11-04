import React, {useState} from 'react';
import {Menu} from "../types";
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import Pages from "../components/Pages/Pages";
import Ingredient from "../components/Ingredients/Ingredient";
import './App.css'

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


  return (
    <div className='my-container d-flex justify-content-between'>
      <Pages pages={menu} count={getCount}/>
      <div className="Burger bg-white">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <Ingredient name={ingredients[0].name}/>
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
}

export default App;
