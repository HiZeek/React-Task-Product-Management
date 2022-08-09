import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartIconOverlay from "./components/Cart/CartIconOverlay";
import Category from "./components/Category";
import Header from "./components/Layout/Header";
import ProductList from "./components/ProductList";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Router>
        {cartIsShown && <CartIconOverlay onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Category />
        <ProductList />
        {/* <Products/> */}
      </Router>
    </Fragment>
  );
};

export default App;
