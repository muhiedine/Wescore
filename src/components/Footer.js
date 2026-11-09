import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <h2>WeScore</h2>
          <p>Every match. Every moment. One place.</p>
          <p className="footer-small">A Demo Football App</p>
        </div>
        <div className="footer-links">
          <Link to="/matches">Matches</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/standings">Standings</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 WeScore. Academic project.</p>
        <p>Scores and Teams are fictional.</p>
      </div>
    </footer>
  );
}

export default Footer;
