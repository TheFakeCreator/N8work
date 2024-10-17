import React from 'react';
import "./ComponentStyles/Navbar.css";

const Navbar = () => {
  return (
    <header>
        <nav>
            <div id="logo">
                <a href="#"><i class="fa-solid fa-code-branch"></i> N8work</a>
            </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Docs</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="nav-link">Help</a>
            <a href="#" className="nav-link login-btn">Login</a>

          </div>
        </nav>
    </header>
  )
}

export default Navbar
