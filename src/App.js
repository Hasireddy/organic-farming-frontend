import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import ProductsCatalog from './components/ProductsCatalog';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Products' element={<ProductsCatalog />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;