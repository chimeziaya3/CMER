import React, { Component } from 'react';
import '../App.css';
import Nav from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
<<<<<<< HEAD
import About from './About';
=======
import About from './About.jsx';
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
<<<<<<< HEAD
        
        <Hero />
        <About />
        
=======
        <Nav />
        <Hero />
        <hr/>
        <About />
        <Footer />
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db
      </div>
    );
  }
}

export default Landing;