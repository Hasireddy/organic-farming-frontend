import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Register from './components/Register.js';
import MyMap from './components/Maps.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MyMap />
      <Footer />
    </div>
  );
}

export default App;
