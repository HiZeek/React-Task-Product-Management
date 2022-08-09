import React, { Component } from "react";
import Modal from "../UI/Modal";

class CartIconOverlay extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <h1>Cart Overlay</h1>
      </Modal>
    );
  }
}

export default CartIconOverlay;
