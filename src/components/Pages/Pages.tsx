import React from 'react';
import {Menu} from "../../types";
import Page from "./Page";
import './Page.css'

interface Props {
  pages: Menu[];
  count: (index: number) => number;
  addSomeIngredients: (index: number) => void;
}

const Pages: React.FC<Props> = ({pages, count, addSomeIngredients}) => {
  return (
    <div className='menu'>
      {pages.map((page, index: number) => (
        <Page
          key={Math.random()}
          name={page.name}
          price={page.price}
          image={page.image}
          count={count(index)}
          onAddIngredient={() => addSomeIngredients(index)}
        />
      ))}
    </div>
  );
};

export default Pages;