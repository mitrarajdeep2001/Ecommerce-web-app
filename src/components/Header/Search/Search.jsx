import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect((e) => {
    getProducts();
  }, []);

  useEffect(() => {
    searchQuery(query);
  }, [query]);

  //Get all products
  const getProducts = async () => {
    const res = await fetchDataFromApi(`/products`);
    setData(res);
  };

  //Handle search
  const searchQuery = async (query) => {
    let items = [...data];
    items = items.filter((item) => item.title.toLowerCase().includes(query));
    setData(items);
  };

  //Handle input change & check key type
  const handleChange = (e) => {
    console.log(e.nativeEvent.inputType);
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      getProducts();
    }
    setQuery(e.target.value);
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
            data.map((item) => (
              <div
                key={item.id}
                className="search-result-item"
                onClick={() => {
                  navigate("/product/" + item.id);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img src={item.image} alt="searched_product" />
                </div>
                <div className="product-details">
                  <span className="name">{item.title}</span>
                  <span className="desc">{item.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
