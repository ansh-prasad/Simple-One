import { useState, useEffect } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setShowSearch }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSearch(false);
    }, 600);
  };

  return (
    <div className={`search-modal ${isClosing ? "closing" : ""}`}>
      <div className="form-fiels">
        <input type="text" autoFocus placeholder="Search For Products" />
        <MdClose onClick={handleClose} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>

            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
