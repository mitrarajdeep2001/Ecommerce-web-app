import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState("");
  const [product, setProduct] = useState("");
  const [cartItems, setCartItems] = useState(
   JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartCounts, setCartCounts] = useState(0);
  const [cartSubTotatl, setCartSubTotal] = useState(0);
  const location = useLocation();
  const { user } = useAuth0();

  //Scroll to the top of the page when route change in the url
  useEffect(() => window.scrollTo(0, 0), [location]);

  useEffect(() => {
    if (user && cartItems.length > 0 && localStorage) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    if (!user) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
    let subTotal = 0,
      count = 0;
    cartItems.forEach((item) => {
      subTotal += item.quantity * item.price;
      count += item.quantity;
    });
    setCartSubTotal(subTotal);
    setCartCounts(count);
  }, [cartItems, user]);

  //Add product to the cart
  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      items = [...items, { ...product, quantity }];
    }
    setCartItems(items);
  };

  //Remove product from the cart
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  //Increase/decrease cart item quantity
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].quantity += 1;
    } else {
      if (items[index].quantity === 1) return 1;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  const value = {
    categories,
    setCategories,
    category,
    setCategory,
    products,
    setProducts,
    product,
    setProduct,
    cartItems,
    setCartItems,
    cartCounts,
    setCartCounts,
    cartSubTotatl,
    setCartSubTotal,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
