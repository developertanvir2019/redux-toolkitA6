import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Posts from './Components/Posts';

function App() {
  return (
    <body>
      <Navbar />
      <section class="wrapper">
        <SideNav />
        <Posts />
      </section>
    </body>
  );
}

export default App;
