import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// IMAGES
import Logo from "../asset/Logo.png";
import Cart from "../asset/Empty_Cart.png";
import Dollar from "../asset/Dollar_Icon.png";
import UpArrow from "../asset/Up_Arrow.png";
import HeaderCurrencyIcon from "./HeaderCurrencyIcon";

const CATEGORY_QUERY = `
 {
    categories {
      name,
      products {
        id
      }
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      categoryList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: CATEGORY_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ categoryList: data.data.categories }));
  }

  render() {
    return (
      <header className="header">
        {this.state.rotate && <HeaderCurrencyIcon />}
        <div className="header-left">
          {this.state.categoryList.map((category) => (
            <Link
              className="current-link"
              to={`/${category.name}`}
              key={category.id}
            >
              {category.name}
            </Link>
          ))}
          {/* <Link to="/women" className="current-link">
            Women
          </Link>
          <Link to="/men">Men</Link>
          <Link to="/kids">Kids</Link> */}
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
