import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login";
import FAQ from "./Pages/FAQ";
import AddFaq from "./Pages/AddFaq";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import AddProduct from "./Pages/AddProduct";

const App = () => {
  return (
    <div className="App min-h-screen bg-white flex flex-col ">
      <ToastContainer />
      <Header />
      <Routes>
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/addfaq" element={<AddFaq />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products/addProduct" element={<AddProduct />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
