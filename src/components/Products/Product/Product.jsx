import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({data, id}) => {
  const navigate = useNavigate()
  return (
    <div className="product-card" onClick={() => navigate("/product/"+id)}>
      <div className="thumbnail">
        <img src={data?.images?.data?.[0]?.attributes?.url} alt="prod_img"/>
      </div>
        <div className="prod-details">
          <span className="name">{data.title}</span>
          <span className="price">&#8377;{data.price}</span>
        </div>
    </div>
  );
};

export default Product;
