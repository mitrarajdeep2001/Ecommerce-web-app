import { useEffect } from "react";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import "./Category.scss";
import { useAppContext } from "../../utils/context";
import { useParams } from "react-router-dom";

const Category = () => {
  const { products, setProducts, category, setCategory } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    getCategories();
  }, [id]);

  useEffect(() => {
    getProducts();
  }, [category]);

  const getCategories = () => {
    fetchDataFromApi(`/products/categories`).then((res) => {
      setCategory(res[id - 1]);
    });
  };
  const getProducts = () => {
    fetchDataFromApi(`/products/category/${category}`).then((res) => {
      setProducts(res);
    });
  };
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{category}</div>
        <Products innerPage={true} products={products} />
      </div>
    </div>
  );
};

export default Category;
