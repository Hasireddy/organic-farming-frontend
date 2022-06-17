import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Productdetails from './components/Productdetails';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Products' element={<Productdetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;