import * as React from 'react';
import '../styles/footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">

          <h3>About<span>OneDayDecorating</span></h3>
            <p className="footer-links">
              <a href="#">Home</a>
              |
              <a href="#">Before&amp;After</a>
              |
              <a href="#">Testimonials</a>
              |
              <a href="#">Contact</a>
            </p>

          <p className="footer-company-name">© 2020 OneDayDecorating Pvt. Ltd.</p>
        </div>
      {/* </div> */}

        <div className="footer-center">
          <div>
            <a href="https://www.google.com/maps/place/Huntington,+NY/@40.8821702,-73.4447438,13z/data=!3m1!4b1!4m5!3m4!1s0x89e8262a13617667:0xb204082f43b17fe1!8m2!3d40.8681539!4d-73.425676" target="_blank"><i className="fa fa-map-marker"></i></a>
            <a href="https://www.google.com/maps/place/Huntington,+NY/@40.8821702,-73.4447438,13z/data=!3m1!4b1!4m5!3m4!1s0x89e8262a13617667:0xb204082f43b17fe1!8m2!3d40.8681539!4d-73.425676" target="_blank"><p><span>Huntington</span>
              New York, 11743</p></a>
          </div>
        {/* <!-- <div>
          <i className="fa fa-phone"></i>
          <p>number</p>
        </div> --> */}
        <div>
          <a href="mailto:mailto:KristenStern65@yahoo.com" target="_blank"><i className="fa fa-envelope"></i></a>
          <p><a href="mailto:mailto:KristenStern65@yahoo.com" target="_blank">kristenstern65@yahoo.com</a></p>
        </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>One Day Decorating</span>
          </p>
        </div>
      </footer>
    );
  };
};

export default Footer;