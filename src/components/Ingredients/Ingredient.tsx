import React from 'react';
import {Menu} from "../../types";
import './Ingredient.css';

const Ingredient:React.FC<Menu> = (props) => {
  return (
    <div className={props.name}>
    </div>
  );
};

export default Ingredient;