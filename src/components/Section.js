import React from 'react';
import './Section.css';

function Section({ sectionNumber, sectionData, responses, onResponse }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-number">Section {sectionNumber}</div>
        <h2>{sectionData.title}</h2>
      </div>

      <div className="items-list">
        {sectionData.items.map((item, index) => (
          <div key={item.id} className="item">
            <div className="item-header">
              <span className="item-letter">{item.id}.</span>
              <span className="item-text">{item.text}</span>
            </div>

            {sectionNumber !== 2 ? (
              <div className="scale-options">
                {sectionData.scale.map((label, idx) => (
                  <label key={idx} className="option-label">
                    <input
                      type="radio"
                      name={item.id}
                      value={idx + 1}
                      checked={responses[item.id] === idx + 1}
                      onChange={(e) => onResponse(item.id, parseInt(e.target.value))}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span className="option-text">{label}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="binary-options">
                {sectionData.scale.map((label, idx) => (
                  <label key={idx} className="option-label">
                    <input
                      type="radio"
                      name={item.id}
                      value={idx}
                      checked={responses[item.id] === idx}
                      onChange={(e) => onResponse(item.id, parseInt(e.target.value))}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span className="option-text">{label}</span>
                  </label>
                ))}
              </div>
            )}

            {item.strategy && (
              <div className="item-strategy">
                <span className="strategy-badge">{item.strategy}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
