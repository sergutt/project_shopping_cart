import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const imgStyles = {
    backgroundImage: `url(${product.image})`,
    width: "100%",
    height: "300px",
    backgroundSize: "cover",
    position: "center",
  };

  return (
    <div className="product_container">
      <div className="product_card">
        <div>
          <div style={imgStyles}></div>
          <h2 className="product_title">{product.title}</h2>
          <p className="product_description">{product.description}</p>
        </div>

        <div className="addContainer">
          <div>
            <button className="cntBtn" onClick={() => setCount(count - 1)}>
              -
            </button>
            {count}{" "}
            <button
              className="cntBtn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              setCart([...cart, { ...product, count }]);
              history.push("/");
            }}
            className="cntBtn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
