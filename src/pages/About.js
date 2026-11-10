import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <section className="inner-hero">
        <div className="container">
          <p className="section-kicker light-kicker">
            THE STORY / WESCORE
          </p>

          <h2>
            FOOTBALL IS BETTER
            <br />
            <span>WHEN IT'S TOGETHER.</span>
          </h2>

          <p>
            One Simple Platform To Discover
            Football Fixtures, Clubs And Tables.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container about-grid">
          <div>
            <p className="section-kicker">
              01 / OUR PURPOSE
            </p>

            <h2>
              Less Searching.
              <br />
              More Football.
            </h2>
          </div>

          <div>
            <p>
              WeScore Is More Than A Website.
            </p>

            <p>
              It Is A Student-Built Football
            </p>

            <Link
              className="text-link"
              to="/matches"
            >
              Explore matches ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                02 / WHAT MATTERS
              </p>

              <h2>
                Designed around the game
              </h2>
            </div>
          </div>

          <div className="card-grid three">
            <div className="feature-card">
              <span>
                01
              </span>

              <h3>
                Clarity first
              </h3>

              <p>
                Find Fixtures, Teams And The League
                Table Without Distraction.
              </p>
            </div>

            <div className="feature-card">
              <span>
                02
              </span>

              <h3>
                Made For Every Screen
              </h3>

              <p>
                Check Fixtures On Any Device.
              </p>
            </div>

            <div className="feature-card">
              <span>
                03
              </span>

              <h3>
                Built For You.
              </h3>

              <p>
                WeScore Is Built For Inthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;