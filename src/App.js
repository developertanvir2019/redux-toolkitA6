import React from 'react';
import './App.css';
import './SASS/style.scss'
import Navbar from './Components/Navbar';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
