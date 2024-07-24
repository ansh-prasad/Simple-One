import "./Category.scss";

import cat1 from "../../../assets/category/1.png";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="" />
          <h1>Ear Burds</h1>
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
