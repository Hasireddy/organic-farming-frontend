import React from 'react';
import Register from './components/Register.js';
import MyMap from './components/Maps.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <MyMap /> */}
      <Footer />
    </div>
  );
}

export default App;
