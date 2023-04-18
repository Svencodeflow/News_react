import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {

  const [input, setInput] = useState('')
  const [updated, setUpdated] = useState(input);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    setUpdated(input);
  }

  return (
    <div className="App">
      <Navbar value={handleChange} onClick={handleClick} update={updated} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
