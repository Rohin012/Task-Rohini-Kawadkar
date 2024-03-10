// App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListing from './components/ProductListing';
import CartPopup from './components/CartPopup';
//import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListing />
      
      <Footer />
    </div>
  );
}

export default App;
