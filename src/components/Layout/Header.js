import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// IMAGES
import Logo from "../asset/Logo.png";
import Cart from "../asset/Empty_Cart.png";
import Dollar from "../asset/Dollar_Icon.png";
import UpArrow from "../asset/Up_Arrow.png";
import HeaderCurrencyIcon from "./HeaderCurrencyIcon";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { rotate: false };
  }

  render() {
    return (
      <header className="header">
        {this.state.rotate && <HeaderCurrencyIcon />}
        <div className="header-left">
          <Link to="/women" className="current-link">
            Women
          </Link>
          <Link to="/men">Men</Link>
          <Link to="/kids">Kids</Link>
        </div>
        <div className="header-center">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-right">
          <img src={Dollar} alt="Currency" />
          <img
            src={UpArrow}
            className={this.state.rotate ? "select-currency" : " "}
            onClick={() => this.setState({ rotate: !this.state.rotate })}
            alt="up Arrow"
          />
          <img src={Cart} alt="Cart" onClick={this.props.onShowCart} />
        </div>
      </header>
    );
  }
}

export default Header;
