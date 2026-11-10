import React from 'react';
import { TeamsList } from '../data/TeamsList';

function Standings() {
  const sortedTeams = [...TeamsList].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div>
      <section className="inner-hero compact">
        <div className="container">
          <p className="section-kicker light-kicker">
            LEAGUE TABLE
          </p>

          <h2>
            THE NUMBERS <span>MATTER.</span>
          </h2>

          <p>
            Every point. Every position. One clear table.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="table-heading">
            <div>
              <p className="section-kicker">
                PREMIER DIVISION
              </p>

              <h2>
                League standings
              </h2>
            </div>

            <p>
              Ordered by points
            </p>
          </div>

          <div className="table-scroll">
            <table className="standings-table">
              <thead>
                <tr>
                  <th>POS</th>
                  <th>CLUB</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>PTS</th>
                </tr>
              </thead>

              <tbody>
                {sortedTeams.map((team, index) => (
                  <tr key={team.id}>
                    <td className="position">
                      {index + 1}
                    </td>

                    <td className="table-club">
                      <div
                        className={'mini-emblem ' + team.group}
                      >
                        {team.code}
                      </div>

                      {team.name}
                    </td>

                    <td>
                      {team.played}
                    </td>

                    <td>
                      {team.won}
                    </td>

                    <td>
                      {team.drawn}
                    </td>

                    <td>
                      {team.lost}
                    </td>

                    <td>
                      {team.goalsFor}
                    </td>

                    <td>
                      {team.goalsAgainst}
                    </td>

                    <td className="points">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="table-footnote">
            P = played, W = wins, D = draws,
            L = losses, GF = goals for,
            GA = goals against, PTS = points.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Standings;