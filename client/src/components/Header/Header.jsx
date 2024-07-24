import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [shoeCart, setShowCart] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left">ANSH</div>
          <ul className="center">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>

          <div className="right">
            <TbSearch />
            <AiOutlineHeart />

            <span className="cart-icon" onClick={() => setShowCart(true)} >
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>

      {shoeCart && <Cart  setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
