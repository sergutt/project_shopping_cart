import { useContext } from "react";
import React from "react";
import CartContext from "../../Context/CartContext";
import "./checkout.css";
import { useHistory } from "react-router";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const modifyCount = (e, index) => {
    const cartCopy = [...cart];
    cartCopy[index].count = e.target.value;
    setCart(cartCopy);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  };

  return (
    <div className="cart_container">
      <div className="product_cart_container">
        {cart.map((item, index) => (
          <div className="cart_item">
            <h3>
              {" "}
              {index + 1}.) {item.title}
            </h3>

            <div className="cart_edit_group">
              <h3>
                ${item.price} x
                <input
                  className="count_edit"
                  onChange={(e) => {
                    modifyCount(e, index);
                  }}
                  value={item.count}
                ></input>{" "}
                = ${item.price * item.count}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <h1>Total : ${calculateTotal()}</h1>
      <button
        className="checkoutButton"
        onClick={() => {
          setCart([]);
          history.push("/");
        }}
      >
        <h1> Checkout</h1>
      </button>
    </div>
  );
};

export default Checkout;
