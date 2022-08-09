import React, { Component } from "react";
import "../styles/HeaderCurrencyIcon.css";

class HeaderCurrencyIcon extends Component {
  render() {
    return (
      <div className="header-currencies">
        <div className="currency">&#36; USD</div>
        <div className="currency">&#8364; EUR</div>
        <div className="currency">&#165; JPY</div>
      </div>
    );
  }
}

export default HeaderCurrencyIcon;
