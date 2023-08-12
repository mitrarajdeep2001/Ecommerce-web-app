import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    searchProducts();
  }, [query]);

  const searchProducts = async () => {
    const res = await fetchDataFromApi(
      `/api/products?populate=*&[filters][title][$contains]=${query}`
    );
    setData(res);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoFocus
          placeholder="Search for products"
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {query.length !== 0 &&
            data?.data?.map((item) => (
              <div
                key={item.id}
                className="search-result-item"
                onClick={() => {
                  navigate("/product/" + item.id);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={item.attributes.images.data[0].attributes.url}
                    alt="searched_product"
                  />
                </div>
                <div className="product-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
