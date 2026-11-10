import React, { useState } from 'react';
import { TeamsList } from '../data/TeamsList';

function Teams() {
  const [search, setSearch] = useState('');
  const [savedOnly, setSavedOnly] = useState(false);

  const [savedTeams, setSavedTeams] = useState(() => {
    try {
      const stored = localStorage.getItem(
        'wescore-favourite-teams'
      );

      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleTeam = (id) => {
    const updated = savedTeams.includes(id)
      ? savedTeams.filter((item) => item !== id)
      : [...savedTeams, id];

    setSavedTeams(updated);

    localStorage.setItem(
      'wescore-favourite-teams',
      JSON.stringify(updated)
    );
  };

  const filteredTeams = TeamsList.filter((team) => {
    const matchesSearch =
      team.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      team.city
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSaved =
      !savedOnly ||
      savedTeams.includes(team.id);

    return matchesSearch && matchesSaved;
  });

  return (
    <div>
      <section className="inner-hero compact">
        <div className="container">
          <p className="section-kicker light-kicker">
            THE CLUBS
          </p>

          <h2>
            MEET THE <span>TEAMS.</span>
          </h2>

          <p>
            Browse Eight Clubs
            And Save Your Favourites.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="team-toolbar">
            <div>
              <label htmlFor="team-search">
                Find your club
              </label>

              <input
                id="team-search"
                type="text"
                value={search}
                placeholder="Search team or city..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              type="button"
              className={
                savedOnly
                  ? 'favourite-filter selected'
                  : 'favourite-filter'
              }
              onClick={() => setSavedOnly(!savedOnly)}
            >
              ★ Saved teams ({savedTeams.length})
            </button>

            <p>
              {filteredTeams.length} clubs
            </p>
          </div>

          {filteredTeams.length === 0 ? (
            <div className="empty-state">
              <h3>
                No teams found
              </h3>

              <p>
                Try a different search or show all teams.
              </p>
            </div>
          ) : (
            <div className="card-grid four">
              {filteredTeams.map((team) => (
                <div
                  className="team-card"
                  key={team.id}
                >
                  <div
                    className={'team-emblem ' + team.group}
                  >
                    {team.code}
                  </div>

                  <h3>
                    {team.name}
                  </h3>

                  <p>
                    {team.city}
                  </p>

                  <div className="team-stats">
                    <div>
                      <strong>
                        {team.played}
                      </strong>

                      <small>
                        Played
                      </small>
                    </div>

                    <div>
                      <strong>
                        {team.won}
                      </strong>

                      <small>
                        Wins
                      </small>
                    </div>

                    <div>
                      <strong>
                        {team.points}
                      </strong>

                      <small>
                        Pts
                      </small>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="save-button team-save-button"
                    onClick={() => toggleTeam(team.id)}
                  >
                    {savedTeams.includes(team.id)
                      ? '★ Saved team'
                      : '☆ Save team'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Teams;