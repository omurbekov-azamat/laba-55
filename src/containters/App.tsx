import React from 'react';
import {Menu} from "../types";
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import Page from "../components/Pages/Page";

const menu: Menu[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

function App() {
  return (
    <div className='container'>
      <Page name={menu[0].name} price={menu[0].price} image={menu[0].image}/>
    </div>
  );
}

export default App;
