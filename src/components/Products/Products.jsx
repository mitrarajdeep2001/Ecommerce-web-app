import Product from "./Product/Product";
import "./Products.scss";
import { Vortex } from "react-loader-spinner";

const Products = ({ innerPage, headingText, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products ? (
          products.map((e) => <Product key={e.id} id={e.id} data={e} />)
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
    </div>
  );
};

export default Products;
