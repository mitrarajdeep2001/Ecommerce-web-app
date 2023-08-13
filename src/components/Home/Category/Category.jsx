import "./Category.scss";
import { useNavigate } from "react-router-dom";
import electronicsImg from "../../../assets/category/electronics.jpeg";
import jewellery from "../../../assets/category/jewellery-img.jpg"
import womensClothing from "../../../assets/category/women's-clothing-img.webp"
import mensClothing from "../../../assets/category/mensClothing-img.jpg"
import { Vortex } from "react-loader-spinner";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  const images = [electronicsImg, jewellery, mensClothing, womensClothing]
  return (
    <div className="shop-by-category">
      <div className="sec-heading">categories</div>
      <div className="categories">
        {categories ? (
          categories.map((e, i) => (
            <div className="category">
              <div
                key={i + 1}
                className="img-container"
                onClick={() => navigate(`/category/${i + 1}`)}
              >
                <img src={images[i]} alt="cat_img" />
              </div>
              <p>{e}</p>
            </div>
          ))
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

export default Category;
