import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import './App.css';
import Homepage from './components/homepage/homepage'
import { Navbar } from './components/navbar/navbar'
import { About } from './components/about/about'
import { Services } from './components/services/services' 
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Router>
    
    

  );
}

export default App;
