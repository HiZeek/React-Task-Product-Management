import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles/ProductList.css";



class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        {this.props.products.map((product) => (
          <Link to={`/productList/${product.id}`} key={product.id}>
            <div className="product-card">
              <img
                src={product.image}
                alt="product-img"
                className="product-card-img"
              />
              <div className="product-card-cart">
                <img src={product.cart} alt="product-cart" className="cart" />
              </div>
              <p className="product-card-title">{product.title}</p>
              <p className="product-card-price">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
};

export default ProductList;
