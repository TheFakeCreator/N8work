import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink 
            to='/docs' 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          >
            Docs
          </NavLink>
          <NavLink 
            to='/about' 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          >
            About
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          >
            Contact
          </NavLink>
          <NavLink 
            to='/help' 
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
          >
            Help
          </NavLink>
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
