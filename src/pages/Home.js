import React from 'react';
import { Link } from 'react-router-dom';
import { MatchesList } from '../data/MatchesList';
import MatchCard from '../components/MatchCard';
function Home() {
  const featured = MatchesList.filter(match => match.id === 5 || match.id === 6 || match.id === 7);
  return <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> FOOTBALL. ALL IN ONE PLACE.</p>
            <h2>THE GAME.<br /><span>YOUR WAY.</span></h2>
            <p className="hero-description">Follow the fixtures, explore the clubs, and save the matchups that matter. A cleaner way to experience football.</p>
            <div className="hero-actions">
              <Link className="button button-lime" to="/matches">Explore matches <span>↗</span></Link>
              <Link className="button button-outline" to="/teams">Discover teams</Link>
            </div>
            <p className="demo-note">Academic demo · All match information is fictional</p>
          </div>
          <div className="hero-panel">
            <div className="panel-heading"><p>THE MATCHDAY BOARD</p><p className="panel-label">DEMO / 2026</p></div>
            <div className="pitch-graphic"><div className="pitch-line"></div><div className="pitch-circle"></div><div className="pitch-area left"></div><div className="pitch-area right"></div></div>
            <div className="hero-score">
              <div><p className="score-code">NBF</p><h3>Northbridge FC</h3></div>
              <div className="score-center"><p>02 : 01</p><span>FULL TIME</span></div>
              <div className="away"><p className="score-code">HBC</p><h3>Harbor City</h3></div>
            </div>
            <div className="panel-bottom"><span>PREMIER DIVISION</span><span>MATCH 01 / 12</span></div>
          </div>
        </div>
        <div className="container hero-stats">
          <div><strong>12</strong><span>Sample fixtures</span></div>
          <div><strong>08</strong><span>Fictional clubs</span></div>
          <div><strong>07</strong><span>Website pages</span></div>
          <div><strong>01</strong><span>Football destination</span></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading"><div><p className="section-kicker">01 / THE FIXTURES</p><h2>What's coming <em>up</em></h2></div><Link className="text-link" to="/matches">All fixtures ↗</Link></div>
          <div className="card-grid three">{featured.map(match => <MatchCard key={match.id} match={match} />)}</div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-feature">
          <div><p className="section-kicker light-kicker">02 / BUILT FOR SUPPORTERS</p><h2>KEEP YOUR EYE<br /><span>ON THE BALL.</span></h2><p>From fixtures to standings, WeScore is designed to make finding football information feel simple and immediate.</p><Link className="button button-lime" to="/features">See the features <span>↗</span></Link></div>
          <div className="info-tiles">
            <div><span>01</span><h3>Find the fixture</h3><p>Filter or search the match schedule.</p></div>
            <div><span>02</span><h3>Know your team</h3><p>Browse sample clubs and league records.</p></div>
            <div><span>03</span><h3>Save favourites</h3><p>Keep selected matches in this browser.</p></div>
          </div>
        </div>
      </section>
    </div>;
}
export default Home;
