import React, { Component } from "react";
import Category from "./Category";
import ProductList from "./ProductList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: null };
  }

  componentDidMount() {
    fetch('http://localhost:8000/productList')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        this.setState({ productList: data })
      });
  }

  render() {
    return (
      <div>
        <Category />
        {this.state.productList && (
          <ProductList products={this.state.productList} />
        )}
      </div>
    );
  }
}

export default Home;
