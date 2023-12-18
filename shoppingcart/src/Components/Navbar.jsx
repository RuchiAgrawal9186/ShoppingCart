import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.allcart.cart);

  return (
    <>
      <nav className="navigation">
        <div>
          <h1>ShopStore</h1>
        </div>

        <Link to="/" className="home">
          Home
        </Link>

        <Link to="/cart" className="cart">
          Cart ({cart.length})
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
