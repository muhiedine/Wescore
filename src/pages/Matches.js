import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { MatchesList } from '../data/MatchesList';

function Matches() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [order, setOrder] = useState('Soonest first');
  const [savedOnly, setSavedOnly] = useState(false);

  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem(
        'wescore-favourites'
      );

      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavourite = (id) => {
    const updated = favourites.includes(id)
      ? favourites.filter((item) => item !== id)
      : [...favourites, id];

    setFavourites(updated);

    localStorage.setItem(
      'wescore-favourites',
      JSON.stringify(updated)
    );
  };

  const filteredMatches = MatchesList.filter((match) => {
    const matchesSearch =
      match.home
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      match.away
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      match.competition
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === 'All' ||
      match.status === status;

    const matchesSaved =
      !savedOnly ||
      favourites.includes(match.id);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesSaved
    );
  });

  const displayedMatches = [...filteredMatches].sort(
    (a, b) =>
      order === 'Soonest first'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
  );

  return (
    <div>
      <section className="inner-hero compact">
        <div className="container">
          <p className="section-kicker light-kicker">
            MATCH CENTRE
          </p>

          <h2>
            ALL THE FIXTURES.
            <br />
            <span>ONE PLACE.</span>
          </h2>

          <p>
            Search, filter and save the games
            you want to follow.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="matches-toolbar">
            <div>
              <label htmlFor="match-search">
                Search a team or competition
              </label>

              <input
                id="match-search"
                type="text"
                placeholder="Try Northbridge or City Cup"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="match-status">
                Match status
              </label>

              <select
                id="match-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>All</option>
                <option>Upcoming</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="match-order">
                Sort by date
              </label>

              <select
                id="match-order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              >
                <option>Soonest first</option>
                <option>Latest first</option>
              </select>
            </div>

            <div className="toolbar-button">
              <button
                type="button"
                className={
                  savedOnly
                    ? 'favourite-filter selected'
                    : 'favourite-filter'
                }
                onClick={() => setSavedOnly(!savedOnly)}
              >
                ★ Saved ({favourites.length})
              </button>
            </div>
          </div>

          <div className="results-heading">
            <h2>
              Match schedule
            </h2>

            <p>
              {displayedMatches.length} matches found
            </p>
          </div>

          {displayedMatches.length === 0 ? (
            <div className="empty-state">
              <h3>
                No matches found
              </h3>

              <p>
                Try a different team, competition or filter.
              </p>
            </div>
          ) : (
            <div className="card-grid two">
              {displayedMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  isSaved={favourites.includes(match.id)}
                  onSave={toggleFavourite}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Matches;