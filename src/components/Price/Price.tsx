import React from 'react';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = (props) => {
  return (
    <h2>Total price: {props.price}</h2>
  );
};

export default Price;