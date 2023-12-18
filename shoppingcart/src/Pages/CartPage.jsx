import React, { useState } from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  decrementQuantity,
  getCartTotal,
  incrementQuantity,
  remove,
} from "../Redux/features/cartSlice";
import { useNavigate } from "react-router";

const CartPage = () => {
  const totalQuantity = useSelector((state) => state.allcart.totalQuantity);
  const totalPrice = useSelector((state) => state.allcart.totalPrice);
  const cart = useSelector((state) => state.allcart.cart);
  const discount = useSelector((state) => state.allcart.discount);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(getCartTotal());
  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  const increment = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const thankyou = () => {
    //  return <Navigate to="/thankyou"></Navigate>
    setTimeout(() => {
      return navigate("/thankyou");
    }, 1000);
  };

  return (
    <>
      <div className="main_cart_div">
        <div className="cart_container">
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <span>Name: {item.title}</span>
                </div>
                <div>
                  <button
                    className="button"
                    onClick={() => increment(item.id)}
                    style={{
                      backgroundColor: "purple",
                      color: "white",
                      padding: "2% 5%",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                  <span style={{ marginRight: "2%", marginLeft: "2%" }}>
                    {item.quantity}
                  </span>
                  <button
                    className="button"
                    onClick={() => decrement(item.id)}
                    style={{
                      backgroundColor: "purple",
                      color: "white",
                      padding: "2% 5%",
                      cursor: "pointer",
                    }}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                </div>
                <div>
                  <span>price: ₹{item.price * item.quantity}</span>
                </div>
                <div>
                  <i
                    className="fa-solid fa-trash color"
                    onClick={() => handleDelete(item.id)}
                  ></i>
                  {/* <button >delete</button> */}
                </div>
              </div>
            );
          })}
          {/* <h1>Total : {sum}</h1><button className='button' onClick={()=> thankyou()}>Payment</button> */}
        </div>

        <div className="total_div">
          <div>
            <div style={{ fontSize: "20px" }}>Order Summary</div>
            <hr />
            <div>Items Ordered :{cart.length} </div>
            <div>Total Quantity: {totalQuantity}</div>
            <div
              style={{
                padding: "2% 3%",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Discount Applied: {discount * 100}%
            </div>
            <div>Total Price : ₹{totalPrice}</div>
            <hr />
            <button className="Payment" onClick={() => thankyou()}>
              Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
