import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";

class Backdrop extends Component {
  render() {
    return <div className="backdrop" onClick={this.props.onClose} />;
  }
}

class CartOverlay extends Component {
  render() {
    return (
      <div className="modal">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const portalElement = document.getElementById("overlays");

class Modal extends Component {
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={this.props.onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <CartOverlay>{this.props.children}</CartOverlay>,
          portalElement
        )}
      </Fragment>
    );
  }
}

export default Modal;
