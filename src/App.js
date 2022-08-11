import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartIconOverlay from "./components/Cart/CartIconOverlay";
// import Category from "./components/Category";
import Home from "./components/Home";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
// import ProductList from "./components/ProductList";

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
        {/* <Category />
        <ProductList /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productList/:id" element={<ProductDetails />} exact={true} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
