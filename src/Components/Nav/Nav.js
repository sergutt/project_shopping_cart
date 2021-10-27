import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="title">Awesome Shopping Cart</h1>
      </Link>
      <Link className="link" to="/checkout">
        <AiOutlineShoppingCart className="icon" />
      </Link>
    </nav>
  );
};

export default Nav;
