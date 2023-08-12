import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const [product, setProduct] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartCounts, setCartCounts] = useState(0);
  const [cartSubTotatl, setCartSubTotal] = useState(0);
  const location = useLocation();

  //Scroll to the top of the page when route change in the url
  useEffect(() => window.scrollTo(0, 0), [location]);

  useEffect(() => {
    let subTotal = 0,
      count = 0;
    cartItems.forEach((item) => {
      subTotal += item.quantity * item.attributes.price;
      count += item.quantity;
    });
    setCartSubTotal(subTotal);
    setCartCounts(count);
  }, [cartItems]);

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
