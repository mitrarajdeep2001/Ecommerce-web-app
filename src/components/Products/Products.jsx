import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ innerPage, headingText, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((e) => (
          <Product key={e.id} id={e.id} data={e.attributes}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
