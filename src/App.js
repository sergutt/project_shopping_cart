import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/product/1">Product</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <h1>404 page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
