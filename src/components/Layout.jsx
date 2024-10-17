import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
        <Navbar />
        <div className="router-container">
            <Outlet /> {/* This will render the matching route's component */}
        </div>
        <Footer />
    </>
  )
}

export default Layout
