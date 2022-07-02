import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Details from "./components/Details";
import Update from "./components/Update";
import Products from "./components/ProductsCatalog";
import FarmerContact from './components/FarmerContact';
import SingleProduct from './components/SingleProduct';
import MyMap from "./components/Maps";
import NotFound from "./components/NotFound";
// import React, { useContext } from "react";



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState("false");
  const [farmertoken, setFarmerToken] = useState(
    localStorage.getItem("logintoken")
  );
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const verifyLogin = async () => {
      console.log(farmertoken);
      const res = await fetch(process.env.REACT_APP_SERVERURL + "auth/me", {
        headers: {
          Authorization: farmertoken,
        },
      });
      const data = await res.json();
      // console.log(data);
      if (data.error) return toast.error(data.error);
      setUser(data);
      setIsAuthenticated(true);
    };

    farmertoken && verifyLogin();
  }, [farmertoken]);

  const logOut = () => {
    // alert("Logout Called from");
    localStorage.removeItem("logintoken");
    // alert(localStorage.getItem('logintoken'));
    setUser(null);
    setFarmerToken(null);
    setIsAuthenticated(false);
    nav("/");
  };

  return (
    <div
      className="App">
      {/* <Route path='/' element={<Navbar isAuthenticated={isAuthenticated} logOut={logOut} />} >

      </Route> */}
      <Navbar isAuthenticated={isAuthenticated} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/FarmerContact" element={<FarmerContact />} />
        <Route path="/Register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setFarmerToken={setFarmerToken} />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<SingleProduct />} />
        <Route path="/Login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setFarmerToken={setFarmerToken} />} />
        <Route path="/Maps" element={<MyMap />} />
        <Route
          path="/Details"
          element={<Details isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/Dashboard"
          element={<Dashboard isAuthenticated={isAuthenticated} farmertoken={farmertoken} />}
        />

        <Route
          path="/Update"
          element={<Update isAuthenticated={isAuthenticated} farmertoken={farmertoken} />}
        />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
