import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles/ProductList.css";

// IMAGES
import First_Image from "./asset/Image1.png";
import Second_Image from "./asset/Image2.png";
import Third_Image from "./asset/Image3.png";
import Fourth_Image from "./asset/Image4.png";
import Cart from "./asset/Empty_Cart_1.png";

export class ProductList extends Component {
  render() {
    const productList = [
      {
        title: "Apollo Running Short",
        price: "$50",
        image: First_Image,
        id: 1,
        cart: Cart,
      },
      {
        title: "Apollo Running Short",
        price: "$50",
        image: Second_Image,
        id: 2,
        cart: Cart,
      },
      {
        title: "Apollo Running Short",
        price: "$50",
        image: Fourth_Image,
        id: 3,
        cart: Cart,
      },
      {
        title: "Apollo Running Short",
        price: "$50",
        image: Third_Image,
        id: 4,
        cart: Cart,
      },
      {
        title: "Apollo Running Short",
        price: "$50",
        image: First_Image,
        id: 5,
        cart: Cart,
      },
      {
        title: "Apollo Running Short",
        price: "$50",
        image: Fourth_Image,
        id: 6,
        cart: Cart,
      },
    ];

    return (
      <div className="product-list">
        {productList.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div className="product-card" key={product.id}>
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
