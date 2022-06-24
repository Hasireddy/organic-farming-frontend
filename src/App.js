import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';
import Details from './components/Details';
import ProductsCatalog from './components/ProductsCatalog';
<<<<<<< HEAD
import About from './components/ABOUT-PAGE/About';
=======
import About from './components/About';
import NotFound from './components/NotFound';
>>>>>>> 008c83bd62003391f7cc390814f0d722f9fe1ade



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState('false');
  const [logintoken, setLoginToken] = useState(localStorage.getItem('registrationtoken'));
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const verifyLogin = async () => {
      console.log(logintoken);
      const res = await fetch('http://localhost:5000/auth/me', {
        headers: {
          'Authorization': logintoken
        }
      });
      const data = await res.json();
      // console.log(data);
      if (data.error) return toast.error(data.error);
      setUser(data);
      setIsAuthenticated(true)
    };
    verifyLogin();
  }, [logintoken]);

  const logOut = () => {
    // alert("Logout Called from");
    localStorage.removeItem('logintoken');
    // alert(localStorage.getItem('logintoken'));
    setUser(null);
    setLoginToken(null);
    setIsAuthenticated(false);
    nav("/");
    return window.location.reload();
  }
  return (
    <div className="App">
      {/* <Route path='/' element={<Navbar isAuthenticated={isAuthenticated} logOut={logOut} />} >

      </Route> */}
      <Navbar isAuthenticated={isAuthenticated} logOut={logOut} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Products' element={<ProductsCatalog />} />
<<<<<<< HEAD
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
=======
        <Route path='/Login' element={<Login />} />
        <Route path='/Details' element={<Details isAuthenticated={isAuthenticated} />} />
        <Route path='*' element={<NotFound />} />
>>>>>>> 008c83bd62003391f7cc390814f0d722f9fe1ade
      </Routes>
      {<Footer />}
    </div >

  );
}

export default App;