import React from 'react';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = (props) => {
  return (
    <h1>Total price: {props.price}</h1>
  );
};

export default Price;