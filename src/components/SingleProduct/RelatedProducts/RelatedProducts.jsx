import { useEffect } from "react";
import Products from "../../Products/Products";
import { fetchDataFromApi } from "../../../utils/api";
import { useAppContext } from "../../../utils/context";

const RelatedProducts = ({ productId, categoryId }) => {
  const { products, setProducts } = useAppContext();
  useEffect(() => {
    getProducts();
  }, [productId, categoryId]);
  const getProducts = () => {
    fetchDataFromApi(
      `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&paginationId[start]=0&pagination[limit]=4`
    ).then((res) => {
      setProducts(res);
    });
  };
  return (
    <div className="related-products">
      <Products headingText="Related Products" products={products} />
    </div>
  );
};

export default RelatedProducts;
