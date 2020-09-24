import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    let { value } = e.target;
    this.props.searchForm(value.toLowerCase());
  };

  handleCheck = () => {
    this.props.checkedStock();
  };

  render() {
    return (
      <div>
        <label>SEARCH </label>
        <br />
        <input
          type="text"
          name="search"
          value={this.props.searchState}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="checkedbox"
          checked={this.props.checkBox}
          onChange={this.handleCheck}
        />
        <label>Only show products in stock.</label>
        <br />
        <br />
      </div>
    );
  }
}

export default SearchBar;
