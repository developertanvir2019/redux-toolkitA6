import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './page/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Blog from './page/Blog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
