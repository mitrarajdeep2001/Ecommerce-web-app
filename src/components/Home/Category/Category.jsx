import "./Category.scss";
import {useNavigate} from "react-router-dom"

const Category = ({ categories }) => {
  const navigate = useNavigate()
  // console.log(categories?.data[0]?.attributes.image.data.attributes.url);
  return (
    <div className="shop-by-category">
    <div className="sec-heading">categories</div>
      <div className="categories">
        {categories?.data?.map((e) => (
          <div key={e.id} className="category" onClick={() => navigate(`/category/${e.id}`)}>
            <img src={e.attributes?.image?.data?.attributes?.url} alt="cat_img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
