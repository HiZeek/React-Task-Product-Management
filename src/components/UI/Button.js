import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        type={this.props.type || "button"}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  };
};

{
  /* <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div> */
}

export default Button;
