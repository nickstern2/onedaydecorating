import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/navbar.css';

class NavBar extends React.Component {
  componentDidMount() {
  }
  
  componentDidUpdate() {
    const navbar = document.querySelector('.navbar');
    return navbar;

  }
  
  
  render() {
   const initUpdateNavbarOnScroll2 = () =>{
       if(this.navbar) {
         console.log('here1')
       window.addEventListener('scroll', () => {
           if (window.scrollY >= window.innerHeight - 600) {
             console.log('here')
             this.navbar.className.add('navbar-lewagon-black');
            } else {
              console.log('here2')
              this.navbar.className.remove('navbar-lewagon-black');
           }
         });
        }
     }
     initUpdateNavbarOnScroll2()
    return (
      <>
      <div id="main" className="navbar navbar-expand-sm navbar-lewagon fixed-top d-flex">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#top">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#science-top-border">Before&amp;After</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#science-top-border">Contact</a>
            </li>
          </ul>
        </div>
      </div>
   </>
  );
}
}

export default NavBar;

// navbar-scroll
// navbar-dark

  // useEffect(() => {
  //   console.log('here', window.scrollY >= window.innerHeight - 600)
  // }, [])
  // initUpdateNavbarOnScroll();
  // const renderNavBar = () => {
  //   return(
  //     // <div id="main" class="navbar navbar-scroll navbar-expand-sm navbar-dark navbar-lewagon fixed-top d-flex navbar-lewagon-black">
  //     //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     //     <span class="navbar-toggler-icon"></span>
  //     //   </button>
  //     //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //     //     <ul class="navbar-nav mr-auto">
  //     //       <li class="nav-item active">
  //     //         <a class="nav-link" href="#top">Home</a>
  //     //       </li>
  //     //       <li class="nav-item">
  //     //         <a class="nav-link" href="#science-top-border">Before&amp;After</a>
  //     //       </li>
  //     //       <li class="nav-item">
  //     //         <a class="nav-link" href="#science-top-border">Contact</a>
  //     //       </li>
  //     //     </ul>
  //     //   </div>
  //     // </div>
  //   );
  // }
  
  
  // ************ END **************
  
  
  // const initUpdateNavbarOnScroll2 = () => {
  //   const navbar = document.querySelector('.navbar-science');
  //   if (navbar) {
  //     window.addEventListener('scroll', () => {
  //       if (window.scrollY >= window.innerHeight - 600) {
  //         navbar.classList.add('navbar-lewagon-black');
  //       } else {
  //         navbar.classList.remove('navbar-lewagon-black');
  //       }
  //     });
  //   }
  // }
  // initUpdateNavbarOnScroll2()