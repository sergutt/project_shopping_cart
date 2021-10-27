import React, { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";
import "./products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="product_list_container">
      {allProducts.map((product, index) => (
        <Item key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
