import { useState, useEffect } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useAppContext } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";
import { notifyError, notifySuccess } from "../../utils/notify";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { cartCounts } = useAppContext();
  const { loginWithRedirect, user, logout, error } = useAuth0();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //Set scroll event to the header to make it sticky
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  //Notification message for login / error
  useEffect(() => {
    if (user) {
      notifySuccess("LoggedIn Successfully!");
    }
    if (error) {
      notifyError(error.message);
    }
  }, [user, error]);

  //Handle logout
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    notifySuccess("LoggedOut Successfully!");
  };
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            {!user && <li onClick={() => loginWithRedirect()}>Login</li>}
            {user && <li className="greet-user">WB! {user.given_name}</li>}
            {user && <li onClick={handleLogout}>Logout</li>}
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            Shopper'sHub
            <ul>
              {!user && (
                <li onClick={() => loginWithRedirect()}>
                  <BiLogIn size={20} />
                </li>
              )}
              {user && (
                <li onClick={handleLogout}>
                  <BiLogOut size={20} />
                </li>
              )}
            </ul>
          </div>
          <div className="right">
            <TbSearch
              style={{ cursor: "pointer" }}
              onClick={() => setShowSearch(true)}
            />
            <AiOutlineHeart style={{ cursor: "pointer" }} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {cartCounts > 0 && <span>{cartCounts}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
