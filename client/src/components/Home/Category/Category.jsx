import "./Category.scss";

const Category = ({ categories }) => {
  const categoryNames = ["Headphones", "Earbuds", "Speakers", "Smart Watch"];

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item, index) => (
          <div key={item.id} className="category">
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
