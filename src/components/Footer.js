import React from "react";
import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact">
          <p>
            <i className="fa-solid fa-phone"></i>+383 45 XXX XXX
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>info@teknologies.com
          </p>
          <p>
            <i className="fa-solid fa-globe"></i>www.teknologies.netlify.app
          </p>
        </div>
        <div className="social-media">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
