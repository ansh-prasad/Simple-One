import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowCart(false);
    }, 500); // Match this with your animation duration
  };

  useEffect(() => {
    return () => {
      setIsClosing(false);
    };
  }, []);

  return (
    <div className={`cart-panel ${isClosing ? "closing" : ""}`}>
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={handleClose}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {/* <div className="empthi-cart">
          <BsCartX/>
          <span>No Products In The Cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}

        <>
          <CartItem />

          <div className="cart-footer">
            <div className="sub-total">
              <span className="text">Subtotal:</span>
              <span className="text-total">&#8377;9999</span>
            </div>
            <div className="button">
              <button className="checkout-cts">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
