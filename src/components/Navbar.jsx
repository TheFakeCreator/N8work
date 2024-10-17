import React from 'react';
import { Link } from 'react-router-dom';
import "./ComponentStyles/Navbar.css";
import Button from './Button';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div id="logo">
          <a href="#"><i className="fa-solid fa-code-branch"></i> N8work</a>
        </div>
        <div className="nav-links">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/docs' className="nav-link">Docs</Link>
          <Link to='/about' className="nav-link">About</Link>
          <Link to='/contact' className="nav-link">Contact</Link>
          <Link to='/help' className="nav-link">Help</Link>
          <div className='login-links'>
            <Button text="Login" path="/login" />
            <Button text="Sign Up" path="/sign-up" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
