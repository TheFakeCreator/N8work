import React from 'react';
import './ComponentStyles/Home.css';

const Home = () => {
  return (
    <>
        <main>
            <div className="hero">
                <div className="hero-text">
                    <h1>GET <span>THE MOST</span> OUT OF</h1>
                    <h1>YOUR <span>RESEARCH</span></h1>
                    <p>An <b>Open-Source</b> Entity node network visulaizer for research that helps to show connection between different entities by nodes</p>
                </div>
                <div className="searchbar-cont">
                    <input type="text" id="searchbar" placeholder="Search..." />
                    <button type="submit" id="search-btn"><i className="fa-solid fa-search"></i></button>
                </div>
            </div>
        </main>
    </>
  )
}

export default Home
