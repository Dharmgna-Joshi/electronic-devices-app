import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // Import the new Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
