import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Products/> */}
      </div>
    </Router>
  )
}

export default App;
