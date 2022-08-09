import React, { Component } from 'react';
import Category from './Category';
import ProductList from './ProductList';

class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <ProductList />
      </div>
    );
  };
};

export default Home;
