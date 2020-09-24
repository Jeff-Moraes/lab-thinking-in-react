import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const filteredProducts = [...props.products].filter((item) => {
    if (props.toggleStock) {
      return (
        item.name.toLowerCase().includes(props.searchState) && item.stocked
      );
    } else {
      return item.name.toLowerCase().includes(props.searchState);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow
            key={product.name}
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
