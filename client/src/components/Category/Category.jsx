import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&filters[categories][id]=${id}`
  );

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-titel">Category Title</div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
