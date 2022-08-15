import React, { Component } from "react";
import "../styles/HeaderCurrencyIcon.css";

const CURRENCY_QUERY = `
  query {
    currencies {
        label,
        symbol
    }
  }
`;

class HeaderCurrencyIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: CURRENCY_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ currencyList: data.data.currencies }));
  }

  render() {
    return (
      <div className="header-currencies">
        {this.state.currencyList.map((currency) => (
          <div className="currency" key={currency.id}>
            {currency.symbol} {currency.label}
          </div>
        ))}
        {/* <div className="currency">&#36; USD</div>
        <div className="currency">&#8364; EUR</div>
        <div className="currency">&#165; JPY</div> */}
      </div>
    );
  }
}

export default HeaderCurrencyIcon;
