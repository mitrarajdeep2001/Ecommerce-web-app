import Products from "../Products/Products";
import Category from "../Home/Category/Category";
import Banner from "./Banner/Banner";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect } from "react";
import { useAppContext } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useAppContext();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/products/categories").then((res) => {
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/products").then((res) => {
      setProducts(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
