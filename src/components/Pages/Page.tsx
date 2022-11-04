import React from 'react';
import {Menu} from "../../types";

const Page:React.FC<Menu> = (props) => {
  return (
      <div className='d-flex justify-content-between align-items-center bg-white'>
        <img src={props.image} alt="" width='100px'/>
        <button className='btn btn-primary'>add {props.name}</button>
        <p>x {props.count}</p>
        <button className='btn btn-danger'>delete</button>
      </div>
  );
};

export default Page;