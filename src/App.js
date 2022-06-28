import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import FruitsAndVegetables from './components/Fruits';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Details from './components/Details';
import ProductsCatalog from './components/ProductsCatalog';
import About from './components/ABOUT-PAGE/About';
import NotFound from './components/NotFound';
// import React, { useContext } from "react";
import { themeContext } from "./components/ABOUT-PAGE/Context";
import { useContext } from "react";
import Dairy from './components/Dairy';
import Poultry from './components/Poultry'



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [isAuthenticated, setIsAuthenticated] = useState('false');
  const [farmertoken, setFarmerToken] = useState(null);
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const verifyLogin = async () => {
      console.log(farmertoken);
      const res = await fetch('http://localhost:5000/auth/me', {
        headers: {
          'Authorization': farmertoken
        }
      });
      const data = await res.json();
      // console.log(data);
      if (data.error) return toast.error(data.error);
      setUser(data);
      setIsAuthenticated(true)
    };
    if (!localStorage.getItem('logintoken')) {
      setFarmerToken(localStorage.getItem('logintoken'));
      verifyLogin();
    }
  }, [farmertoken]);

  const logOut = () => {
    // alert("Logout Called from");
    localStorage.removeItem('logintoken');
    // alert(localStorage.getItem('logintoken'));
    setUser(null);
    setFarmerToken(null);
    setIsAuthenticated(false);
    nav("/");
    return window.location.reload();
  }
  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      {/* <Route path='/' element={<Navbar isAuthenticated={isAuthenticated} logOut={logOut} />} >

      </Route> */}
      <Navbar isAuthenticated={isAuthenticated} logOut={logOut} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Products' element={<ProductsCatalog />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Details' element={<Details isAuthenticated={isAuthenticated} />} />
        <Route path='/Dashboard' element={<Dashboard isAuthenticated={isAuthenticated} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Fruits' element={<FruitsAndVegetables />} />
        <Route path='/Dairy' element={<Dairy />} />
        <Route path='/Poultry' element={<Poultry />} />
      </Routes>
      {<Footer />}
    </div >

  );
}

export default App;