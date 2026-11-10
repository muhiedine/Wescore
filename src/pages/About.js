import React from 'react';
import { Link } from 'react-router-dom';
function About() {
  return <div>
      <section className="inner-hero"><div className="container"><p className="section-kicker light-kicker">THE STORY / WESCORE</p><h2>FOOTBALL IS BETTER<br /><span>WHEN IT'S TOGETHER.</span></h2><p>One simple platform to discover football fixtures, clubs and tables.</p></div></section>
      <section className="section section-light"><div className="container about-grid">
        <div><p className="section-kicker">01 / OUR PURPOSE</p><h2>Less searching.<br />More football.</h2></div>
        <div><p>WeScore is a football-themed web application created for the CSCI426 Advanced Web Programming course. Its goal is to make football information easy to browse through a clean, responsive React interface.</p><p>The Phase 1 application presents fictional clubs, match results, and standings to demonstrate real frontend interactions without requiring a server or a live football API.</p><Link className="text-link" to="/matches">Explore matches ↗</Link></div>
      </div></section>
      <section className="section section-cream"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / WHAT MATTERS</p><h2>Designed around the game</h2></div></div>
        <div className="card-grid three"><div className="feature-card"><span>01</span><h3>Clarity first</h3><p>Find fixtures, teams and the league table without distraction.</p></div><div className="feature-card"><span>02</span><h3>Made for every screen</h3><p>Responsive pages work on both phones and computers.</p></div><div className="feature-card"><span>03</span><h3>Built with React</h3><p>Components, Router, state, lists, forms and localStorage from the lectures.</p></div></div>
      </div></section>
    </div>;
}
export default About;
