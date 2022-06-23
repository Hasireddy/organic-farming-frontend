import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Details from './components/Details';
import ProductsCatalog from './components/ProductsCatalog';
import About from './components/About';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState('false');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyLogin = async () => {
      const res = await fetch('http://localhost:5000/auth/me', {
        headers: {
          'Authorization': token
        }
      });
      const data = await res.json();
      // console.log(data);
      if (data.error) return toast.error(data.error);
      setUser(data);
      setIsAuthenticated(true)
    };
    verifyLogin();
  }, [token]);

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Products' element={<ProductsCatalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>

  );
}

export default App;