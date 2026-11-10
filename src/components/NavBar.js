import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => setOpenLinks(!openLinks);
  const closeNavbar = () => setOpenLinks(false);
  return <nav className="site-nav">
      <div className="nav-inner">
        <h1 className="brand-name">WeScore</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/standings">Standings</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link className="nav-contact" to="/contact">Contact us</Link>
        </div>
        <button className="mobile-menu-button" type="button" onClick={toggleNavbar}>
          {openLinks ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className="mobile-links" id={openLinks ? 'open' : 'close'}>
        <Link to="/" onClick={closeNavbar}>Home</Link>
        <Link to="/matches" onClick={closeNavbar}>Matches</Link>
        <Link to="/teams" onClick={closeNavbar}>Teams</Link>
        <Link to="/standings" onClick={closeNavbar}>Standings</Link>
        <Link to="/features" onClick={closeNavbar}>Features</Link>
        <Link to="/about" onClick={closeNavbar}>About</Link>
        <Link to="/contact" onClick={closeNavbar}>Contact</Link>
      </div>
    </nav>;
}
export default NavBar;
