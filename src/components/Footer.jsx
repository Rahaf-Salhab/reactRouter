import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaDribbble
  } from "react-icons/fa";
   
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
  
          <div className="footer-section">
            <h4>AROUND THE WEB</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaDribbble /></a>
            </div>
          </div>
  
          <div className="footer-section">
            <h4>ABOUT FREELANCER</h4>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme
              created by <a href="#">Start Bootstrap</a>.
            </p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>Copyright © Your Website 2023</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  