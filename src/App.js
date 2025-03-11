import React from 'react';
import { BrowserRouter as Router, Route , Routes , Navigate } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar/BottomNavBar'; // Ensure correct path
import Home from './pages/Home'; // example component
import Search from './pages/Search'; // example component
import Cart from './pages/Cart'; // example component

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Search />} />
        <Route path="/contact" element={<Cart />} />
      </Routes>
    <BottomNavBar />
  </Router>

  );
}

export default App;
