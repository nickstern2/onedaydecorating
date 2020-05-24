import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useLocation, useHistory } from 'react-router';
import { HashLink as NavLink } from 'react-router-hash-link';
import LandingPage from "./LandingPage";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/navbar.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  // const contactFormLink = () => {
  //   console.log('done');
  //   window.scrollTo(300, 1000);
  // };
  const history = useHistory();
  console.log('his', history)

  return (
      <Router>
        {/* top */}
      <div id="main" className="navbar navbar-expand-sm navbar-lewagon fixed-top d-flex">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                scroll={element => element.scrollIntoView({ behavior: 'smooth' })}
                to="/#home"
                activeClassName="selected"
              >Home</NavLink>
            </li>
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li> */}
            <li className="nav-item">
                <Link className="nav-link" to="/before&amp;after">Before&amp;After</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <NavLink
              className="nav-link"
                to="/#contact-form"
                scroll={element => element.scrollIntoView({ behavior: 'smooth' })}
                activeClassName="selected"
              >Contact</NavLink>
            </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/home#contact-form">Contact</Link>
              </li> */}
          </ul>
        </div>
      </div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/before&amp;After">
            <BeforeAfter />
          </Route>
          <Route path="About">
            <About/>
          </Route>
          <Route path="Contact">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}
// Pages

function Home() {
  return (
    <div>
        <LandingPage />
    </div>
  );
}

function BeforeAfter() {
  return (
    <div>
      <h2>BeforeAfter</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
  
}
