import React from 'react';
import './ResultCard.css';

function ResultCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="result-card">
      <div className="result-header">
        <h2>{profile.title}</h2>
      </div>
      
      <p className="description">{profile.description}</p>

      <div className="strengths">
        <h4>Key Strengths:</h4>
        <ul>
          {profile.strengths.map((strength, idx) => (
            <li key={idx}>✓ {strength}</li>
          ))}
        </ul>
      </div>

      <div className="tips">
        <h4>💡 Tip:</h4>
        <p>{profile.tips}</p>
      </div>
    </div>
  );
}

export default ResultCard;
