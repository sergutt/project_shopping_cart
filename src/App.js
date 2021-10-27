import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Nav from "./Components/Nav/Nav";
import CartContext from "./Context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <Router>
          <Nav />
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
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
