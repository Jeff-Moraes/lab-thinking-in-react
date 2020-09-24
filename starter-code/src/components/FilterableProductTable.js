import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    searchState: '',
    toggleStock: false,
  };

  searchForm = (search) => {
    this.setState({
      searchState: search,
    });
  };

  checkedStock = () => {
    this.setState({
      toggleStock: !this.state.toggleStock,
    });
  };

  render() {
    const { products, searchState, toggleStock } = this.state;

    return (
      <div>
        <SearchBar
          searchForm={this.searchForm}
          checkedStock={this.checkedStock}
          checkBox={toggleStock}
          searchState={searchState}
        />

        <ProductTable
          products={products}
          searchState={searchState}
          toggleStock={toggleStock}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
