import React from 'react';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Homepage />
        {/* <Register />
        <Products /> */}

      </div>
    </div>
  );
}

export default App;