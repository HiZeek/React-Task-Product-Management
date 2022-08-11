import React, { Component } from "react";
import Category from "./Category";
import ProductList from "./ProductList";
// import getCurrencies from "./Query/GetAllCurrencies";
// import getProduct from "./Query/GetAllProducts.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: null };
  }

  // constructor(props) {
  //   super(props);
  //   this.descrRef = React.createRef();
  //   this.state = {
  //     product: "",
  //     gallery: "",
  //     prices: "",
  //     instok: "",
  //     attributes: "",
  //     attributes_1: "",
  //     productAdded: "no",
  //     // add: styles.add,
  //   };
  // }

  componentDidMount() {
    fetch('http://localhost:8000/productList')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        this.setState({ productList: data })
      });

    // const { currentProduct } = this.props;

    // const product =
    //   currentProduct !== "" ? currentProduct : this.props.match.params.id;

    // const result = await JSON.parse(
    //   JSON.stringify((await getProduct("ps-5")).product)
    //   );
    //   console.log(result);

    // this.setState({
    //   product: result,
    //   gallery: result.gallery,
    //   instock: result.inStock,
    //   prices: result.prices.map((item) => item.amount),
    //   attributes: JSON.parse(JSON.stringify(result.attributes)),
    //   attributes_1: result.attributes[0]
    //     ? JSON.parse(JSON.stringify(result.attributes[0].items))
    //     : "",
    // });
  }

  // componentWillUnmount() {
  //   this.props.setDefaultAttributes();
  // }

  // async componentDidMount() {
  //   const result = await JSON.parse(JSON.stringify((await getCurrencies())))
  //   console.log(result);
  //   const results = await JSON.parse(JSON.stringify((await getProducts())))
  //   console.log(results);
  // }

  render() {
    return (
      <div>
        <Category />
        {this.state.productList && (
          <ProductList products={this.state.productList} />
        )}
      </div>
    );
  }
}

export default Home;
