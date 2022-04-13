import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Category />
        <ProductList />
        {/* <Products/> */}
      </div>
    </Router>
  )
}

export default App;
