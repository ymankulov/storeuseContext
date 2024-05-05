import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import Basket from "./components/Basket";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search/:title" element={<Search/>}/>
        <Route path="/productDetails/:elId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
