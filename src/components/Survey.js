import React, { useState } from 'react';
import { surveyData } from '../surveyData';
import Section from './Section';
import './Survey.css';

function Survey({ onComplete }) {
  const [responses, setResponses] = useState({
    section1: {},
    section2: {},
    section3: {}
  });

  const [currentSection, setCurrentSection] = useState(1);

  const handleResponse = (section, itemId, value) => {
    setResponses(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: value
      }
    }));
  };

  const isSectionComplete = (section) => {
    const sectionKey = `section${section}`;
    const items = surveyData[sectionKey].items;
    return items.every(item => responses[sectionKey][item.id] !== undefined);
  };

  const isAllComplete = isSectionComplete(1) && isSectionComplete(2) && isSectionComplete(3);

  const handleNext = () => {
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = () => {
    if (isAllComplete) {
      onComplete(responses);
    }
  };

  const getTotalItems = () => {
    return surveyData.section1.items.length + 
           surveyData.section2.items.length + 
           surveyData.section3.items.length;
  };

  const getCompletedItems = () => {
    const s1 = Object.keys(responses.section1).length;
    const s2 = Object.keys(responses.section2).length;
    const s3 = Object.keys(responses.section3).length;
    return s1 + s2 + s3;
  };

  const progress = (getCompletedItems() / getTotalItems()) * 100;

  return (
    <div className="container">
      <div className="header">
        <h1>📱 Parental Mediation Survey</h1>
        <p>Help us understand your parents' approach to managing your digital activities.</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
          All your responses are confidential and will be used only to generate your results.
        </p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="progress-text">
        Question {getCompletedItems()} of {getTotalItems()}
      </div>

      <div className="sections-container">
        {currentSection === 1 && (
          <Section
            sectionNumber={1}
            sectionData={surveyData.section1}
            responses={responses.section1}
            onResponse={(itemId, value) => handleResponse('section1', itemId, value)}
          />
        )}

        {currentSection === 2 && (
          <Section
            sectionNumber={2}
            sectionData={surveyData.section2}
            responses={responses.section2}
            onResponse={(itemId, value) => handleResponse('section2', itemId, value)}
          />
        )}

        {currentSection === 3 && (
          <Section
            sectionNumber={3}
            sectionData={surveyData.section3}
            responses={responses.section3}
            onResponse={(itemId, value) => handleResponse('section3', itemId, value)}
          />
        )}
      </div>

      <div className="button-group">
        <button 
          onClick={handlePrevious} 
          disabled={currentSection === 1}
          className="btn btn-secondary"
        >
          ← Previous
        </button>

        {currentSection < 3 ? (
          <button 
            onClick={handleNext} 
            disabled={!isSectionComplete(currentSection)}
            className="btn btn-primary"
          >
            Next →
          </button>
        ) : (
          <button 
            onClick={handleSubmit} 
            disabled={!isAllComplete}
            className="btn btn-submit"
          >
            View My Results 🎉
          </button>
        )}
      </div>
    </div>
  );
}

export default Survey;
