import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  const features = [
    { no: '01', title: 'Match explorer', text: 'Browse fictional fixtures, search by club, filter status and change the sort order.', path: '/matches', action: 'Open matches' },
    { no: '02', title: 'Team directory', text: 'Explore eight fictional clubs and instantly search for the one you want.', path: '/teams', action: 'View teams' },
    { no: '03', title: 'League standings', text: 'See team records displayed in a table and ordered by points.', path: '/standings', action: 'See standings' },
    { no: '04', title: 'Saved matches', text: 'Save fixtures to browser storage so they remain selected after refreshing.', path: '/matches', action: 'Save fixtures' },
    { no: '05', title: 'Responsive interface', text: 'A modern website that adapts its layout and navigation to smaller screens.', path: '/', action: 'Go home' },
    { no: '06', title: 'Contact form', text: 'Try an interactive form with React state and required input validation.', path: '/contact', action: 'Contact us' }
  ];
  return (
    <div><section className="inner-hero"><div className="container"><p className="section-kicker light-kicker">DISCOVER / FEATURES</p><h2>EVERYTHING YOU NEED.<br /><span>NOTHING YOU DON'T.</span></h2><p>A Connected Football Experience</p></div></section>
      <section className="section section-light"><div className="container"><div className="section-heading"><div><p className="section-kicker">THE PLATFORM</p><h2>What you can do</h2></div></div>
        <div className="card-grid three">{features.map(feature => <div className="feature-card" key={feature.no}><span>{feature.no}</span><h3>{feature.title}</h3><p>{feature.text}</p><Link to={feature.path}> {feature.action} ↗</Link></div>)}</div>
      </div></section>
    </div>
  );
}

export default Features;
