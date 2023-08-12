import { useEffect } from "react";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import "./Category.scss";
import { useAppContext } from "../../utils/context";
import { useParams } from "react-router-dom";

const Category = () => {
  const { products, setProducts } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getProducts();
  }, [id]);

  const getProducts = () => {
    fetchDataFromApi(
      `/api/products?populate=*&[filters][categories][id]=${id}`
    ).then((res) => {
      setProducts(res);
    });
  };
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {
            products?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} products={products} />
      </div>
    </div>
  );
};

export default Category;
