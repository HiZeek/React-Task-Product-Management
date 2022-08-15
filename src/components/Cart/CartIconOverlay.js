import React, { Component } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import FirstImg from "../asset/Image1.png";
import "../styles/CartIconOverlay.css";

class CartIconOverlay extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="cartIconOverlay">
          <p className="cartIconOverlay-title">
            My Bag<span className="cartIconOverlay-title-small">, 3 items</span>
          </p>
          <div className="cartIconOverlay-products">
            <div className="cartIconOverlay-left">
              <div className="cartIconOverlay-products-top">
                <h2 className="cartIconOverlay-product-title">
                  Apollo Running Short
                </h2>
                <div className="cartIconOverlay-product-add-container">
                  <p className="cartIconOverlay-product-add">+</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="product_description_price_tag">&#36;50.00</p>
                  <div>
                    <p className="product_description_headings">Size:</p>
                    <ul className="sizes">
                      <a href="#">
                        <li className="size_xs">XS</li>
                      </a>
                      <a href="#">
                        <li className="size_s active_size">S</li>
                      </a>
                      <a href="#">
                        <li className="size_m">M</li>
                      </a>
                      <a href="#">
                        <li className="size_l">L</li>
                      </a>
                    </ul>
                  </div>
                </div>
                <p>1</p>
              </div>
              <div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <p>-</p>
              </div>
            </div>
            <div className="cartIconOverlay-right">
              <img
                src={FirstImg}
                alt="Product-Img"
                className="cartIconOverlay-product-img"
              />
            </div>
          </div>
          <div>
            <p>Total</p>
            <p>$200.00</p>
          </div>
          <div>
            <Button>VIEW BAG</Button>
            <Button>CHECKOUT</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default CartIconOverlay;
