import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aliquam corporis, perspiciatis magnam eligendi consectetur amet corrupti facere illo ex deserunt dolores, placeat tempora? Quia iure laudantium harum impedit aut?
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">Dayal BAgh Agra</div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">9999999999</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">XYZ@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wirless Earbuds</span>
          <span className="text">Home Theater</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottm-bar">
        <div className="botttom-bar-content">
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, rem?
            </div>
            <img src={Payment} alt="Payment IMG" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
