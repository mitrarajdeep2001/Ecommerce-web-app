import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Newsletter from "../src/components/Footer/Newsletter/Newsletter";
import Home from "../src/components/Home/Home";
import Category from "../src/components/Category/Category";
import SingleProduct from "../src/components/SingleProduct/SingleProduct";
import AppContextProvider from "./utils/context";
import About from "./components/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
