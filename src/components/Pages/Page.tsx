import React from 'react';

interface PageProps{
  name: string;
  price: number;
  image: string;
  count: number;
  onAddIngredient: React.MouseEventHandler;
}

const Page:React.FC<PageProps> = (props) => {
  return (
      <div className='d-flex justify-content-between align-items-center bg-white'>
        <img className='me-3' src={props.image} alt="" width='100px'/>
        <button onClick={props.onAddIngredient} className='btn btn-primary ms-3'>add {props.name}</button>
        <p className='ms-auto me-3'>x {props.count}</p>
        <button className='btn btn-danger ms-3'>delete</button>
      </div>
  );
};

export default Page;