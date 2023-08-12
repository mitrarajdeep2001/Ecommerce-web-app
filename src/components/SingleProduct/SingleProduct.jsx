import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useAppContext } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { product, setProduct, handleAddToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getProductDetails();
  }, [id]);

  //Get product details
  const getProductDetails = () => {
    fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(
      (res) => {
        setProduct(res);
      }
    );
  };

  //Increment quantity
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                product?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url
              }
              alt="prod_img"
            />
          </div>
          <div className="right">
            <span className="name">
              {product?.data?.[0]?.attributes?.title}
            </span>
            <span className="price">
              &#8377;{product?.data?.[0]?.attributes?.price}
            </span>
            <span className="desc">{product?.data?.[0]?.attributes?.desc}</span>
            <div className="card-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-card-button"
                onClick={() => {
                  handleAddToCart(product.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus fontSize={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <span className="info-item">
              <div className="text-bold">
                category:{" "}
                <span>
                  {
                    product?.data?.[0]?.attributes?.categories?.data?.[0]
                      ?.attributes?.title
                  }
                </span>
              </div>
              <div className="text-bold">
                Share:{" "}
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </div>
            </span>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.data?.[0]?.attributes?.categories?.data?.[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
