import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
  const categoryNames = ["Headphones", "Earbuds", "Speakers", "Smart Watch"];

  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item, index) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
            <h1>{categoryNames[index]}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
