import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Details from './components/Details';
import ProductsCatalog from './components/ProductsCatalog';
import About from './components/About';


function App() {
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