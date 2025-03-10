import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar/BottomNavBar'; // Ensure correct path
import Home from './pages/Home'; // example component
import About from './pages/About'; // example component
import Contact from './pages/Contact'; // example component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
