import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Carousel from './components/Carousel.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
