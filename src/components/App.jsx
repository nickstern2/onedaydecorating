import React, { Component } from 'react';
import Carousel from './Carousel';
import Parallax from './Parallax';
import Banner from './Banner';
import Footer from './Footer';
import NavBar from './NavBar';
import StagingProcess from './Process';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return(
      <div className="App">
        <NavBar />
        <Banner />
        <StagingProcess />
        <Carousel />
        <Parallax />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;