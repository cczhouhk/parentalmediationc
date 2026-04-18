import React, { useState } from 'react';
import Survey from './components/Survey';
import Results from './components/Results';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState('survey'); // 'survey' or 'results'
  const [responses, setResponses] = useState(null);

  const handleSurveyComplete = (surveyResponses) => {
    setResponses(surveyResponses);
    setCurrentStep('results');
  };

  const handleRetakeSurvey = () => {
    setResponses(null);
    setCurrentStep('survey');
  };

  return (
    <div className="app">
      {currentStep === 'survey' ? (
        <Survey onComplete={handleSurveyComplete} />
      ) : (
        <Results responses={responses} onRetake={handleRetakeSurvey} />
      )}
    </div>
  );
}

export default App;
