import { useEffect } from "react";
import Products from "../../Products/Products";
import { fetchDataFromApi } from "../../../utils/api";
import { useAppContext } from "../../../utils/context";
import { Vortex } from "react-loader-spinner";

const RelatedProducts = ({ category, productID }) => {
  const { products, setProducts } = useAppContext();
  useEffect(() => {
    getProducts();
  }, [category, productID]);

  const getProducts = () => {
    fetchDataFromApi(`/products/category/${category}`).then((res) => {
      setProducts(res.filter((e) => e.id !== productID).slice(0, 4));
    });
  };
  return (
    <div className="related-products">
      {products ? (
        <Products headingText="Related Products" products={products} />
      ) : (
        <div className="loader">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
