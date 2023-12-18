import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { FaHeart } from "react-icons/fa";
import { add, alldata } from "../Redux/features/cartSlice";

const Products = () => {
  // const [products,setproducts]=useState([])

  const dispatch = useDispatch();

  const items = useSelector((state) => state.allcart.items);
  console.log("items", items);
  // setproducts(items)

  const fetchProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let resdata = await res.json();
    // setproducts(resdata)
    dispatch(alldata(resdata));
    // console.log(resdata)
    // console.log(res.data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="productsConatiner">
        {items.map((el) => {
          return (
            <div key={el.id} className="productsDiv">
              <img src={el.image} alt="" />
              <h4 style={{ margin: "2%" }}>{el.title}</h4>
              <h5 style={{ margin: "2%" }}>{el.price}</h5>
              <button onClick={() => handleAdd(el)} style={{ margin: "2%" }}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
