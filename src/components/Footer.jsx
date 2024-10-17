import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <footer>

        <div className="footer-links-cont">
          <div className="footer-links-sec">
            <h4>About</h4>
            <ul>
              <li><a href="#">Contributions</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </div>

          <div className="footer-links-sec">
            <h4>Help</h4>
            <ul>
              <li><a href="/pages/FAQ.html">FAQ</a></li>
              <li><a href="/pages/help.html">Support</a></li>
              <li><a href="/pages/terms-of-services.html">Terms of Service</a></li>
              <li><a href="pages/privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-links-sec social-links">
            <h4>Social</h4>
            <ul>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://github.com/TheFakeCreator/N8work?tab=coc-ov-file#contributor-covenant-code-of-conduct" target="_blank"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="netlify"><a href="https://www.netlify.com/">This site is Powered by <img src="src\assets\logo-netlify-small-fullcolor-darkmode.png" alt="netlify"/></a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 N8work. All rights reserved.</p>

        </div>
      </footer>
    </>
  )
}

export default Footer;
