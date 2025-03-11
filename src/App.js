import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import './App.css';
import Homepage from './components/homepage/homepage'
import { Navbar } from './components/navbar/navbar'
import { Va } from './components/va/va'
import { Services } from './components/services/services' 
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'
import { Frontend } from './components/frontend/frontend'
import { Projects } from './components/projects/projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Frontend />
      <Projects />
      <Va />
      <Services />
      <Contact />
      <Footer />
    </Router>
    
    

  );
}

export default App;
