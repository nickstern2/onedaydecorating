import React, { Component } from 'react';
import Carousel from './Carousel';
import Parallax from './Parallax';
import Banner from './Banner';
import Footer from './Footer';
import NavBar from './NavBar';
import StagingProcess from './Process';
import ContactForm from './ContactForm';
import { BrowserRouter, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    // console.log(props);
    // const contactFormLink = () => {
    //   window.scrollTo(0, 5000)
    // }
    return(
      <div className="App">
        {/* <NavBar /> */}
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

export default LandingPage;