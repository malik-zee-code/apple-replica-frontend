import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import SubHeader from "./Components/SubHeader/SubHeader";
import Login from "./Pages/Login";
import FAQ from "./Pages/FAQ";
import AddFaq from "./Pages/AddFaq";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserByToken } from "./Redux/User/action-creators";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getUserByToken(token));
    }
  }, [dispatch, token]);
  return (
    <div className="App min-h-screen bg-white flex flex-col">
      <ToastContainer />
      <Header />
      <SubHeader />
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
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
