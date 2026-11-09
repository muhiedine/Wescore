import React from 'react';

function MatchCard({ match, isSaved, onSave }) {
  return (
    <div className="match-card">
      <div className="match-topline">
        <p>{match.competition}</p>
        <p className={match.status === 'Completed' ? 'status completed' : 'status'}>{match.status}</p>
      </div>
      <div className="match-teams">
        <div className="club"><div className="club-crest">{match.homeCode}</div><h3>{match.home}</h3></div>
        <div className="match-score">
          {match.status === 'Completed' ? <strong>{match.homeScore} : {match.awayScore}</strong> : <strong>VS</strong>}
          <p>{match.date}</p>
          <p>{match.time}</p>
        </div>
        <div className="club"><div className="club-crest alt">{match.awayCode}</div><h3>{match.away}</h3></div>
      </div>
      <div className="match-bottomline">
        <p>{match.venue}</p>
        {onSave && <button type="button" className="save-button" onClick={() => onSave(match.id)}>{isSaved ? '★ Saved' : '☆ Favourite'}</button>}
      </div>
    </div>
  );
}

export default MatchCard;
