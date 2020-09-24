import React from 'react';

const ProductRow = (props) => {
  const { name, price, stocked } = props;
  return (
    <tr>
      <td style={{ color: stocked ? 'black' : 'red' }}>
        <h2>{name}</h2>
      </td>
      <td>
        <h2>{price}</h2>
      </td>
    </tr>
  );
};

export default ProductRow;
