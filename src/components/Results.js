import React, { useMemo } from 'react';
import { surveyData, strategies } from '../surveyData';
import ChartVisualization from './ChartVisualization';
import ResultCard from './ResultCard';
import './Results.css';

function Results({ responses, onRetake }) {
  const scores = useMemo(() => {
    const strategyScores = {
      'Active Mediation': [],
      'Co-use Mediation': [],
      'Restrictive Mediation': [],
      'Diversion Mediation': [],
      'Health Mediation': [],
      'Technical Controls': [],
      'Monitoring': []
    };

    // Section 1 - Likert scale items (1-5)
    surveyData.section1.items.forEach(item => {
      if (responses.section1[item.id] !== undefined) {
        strategyScores[item.strategy].push(responses.section1[item.id]);
      }
    });

    // Section 2 - Binary items (0=No, 1=Yes, 2=Don't know)
    // Treat "Don't know" (2) as missing data and only average the known responses
    surveyData.section2.items.forEach(item => {
      if (responses.section2[item.id] !== undefined && responses.section2[item.id] !== 2) {
        // Map 0->1 (No), 1->5 (Yes) for visualization on 1-5 scale
        const value = responses.section2[item.id] === 1 ? 5 : 1;
        strategyScores[item.strategy].push(value);
      }
    });

    // Section 3 - Likert scale items (1-5)
    surveyData.section3.items.forEach(item => {
      if (responses.section3[item.id] !== undefined) {
        strategyScores[item.strategy].push(responses.section3[item.id]);
      }
    });

    // Calculate averages
    const averages = {};
    Object.keys(strategyScores).forEach(strategy => {
      const scores_arr = strategyScores[strategy];
      if (scores_arr.length > 0) {
        averages[strategy] = parseFloat((scores_arr.reduce((a, b) => a + b, 0) / scores_arr.length).toFixed(2));
      } else {
        averages[strategy] = 0;
      }
    });

    return averages;
  }, [responses]);

  const chartData = strategies.map(strategy => ({
    name: strategy.name,
    score: scores[strategy.name] || 0,
    color: strategy.color
  }));

  const getParentProfile = () => {
    const maxScore = Math.max(...Object.values(scores));
    const maxStrategies = Object.entries(scores).filter(([_, score]) => score === maxScore).map(([strategy, _]) => strategy);
    
    if (maxStrategies.length === 0) return null;
    
    const primaryStrategy = maxStrategies[0];
    const profiles = {
      'Active Mediation': {
        title: 'The Communicative Parent 💬',
        description: 'Your parents actively guide and discuss online activities with you. They explain rules and engage in conversations about internet safety. This approach helps build your digital literacy and critical thinking skills.',
        strengths: ['Open communication', 'Educational focus', 'Trust-building', 'Knowledge sharing'],
        tips: 'This is a healthy approach! Continue these conversations as online risks evolve.'
      },
      'Co-use Mediation': {
        title: 'The Companion Parent 👥',
        description: 'Your parents enjoy digital activities alongside you, whether watching videos or exploring content together. This creates shared experiences and helps them understand your digital interests.',
        strengths: ['Shared experiences', 'Quality time', 'Direct awareness', 'Bonding'],
        tips: 'Great way to stay connected! This helps parents remain aware while maintaining good relationships.'
      },
      'Restrictive Mediation': {
        title: 'The Protective Parent 🛡️',
        description: 'Your parents set clear boundaries about how much time you can spend online and what you can do. This approach prioritizes your safety through structured limitations on your activities.',
        strengths: ['Safety focus', 'Clear boundaries', 'Time management', 'Prevention'],
        tips: 'Balance protection with age-appropriate autonomy to maintain trust.'
      },
      'Diversion Mediation': {
        title: 'The Encouraging Parent 🎯',
        description: 'Your parents actively encourage you to take breaks from digital devices and suggest offline activities instead. They promote a healthy balance between screen time and real-world experiences.',
        strengths: ['Wellbeing focus', 'Healthy habits', 'Diverse interests', 'Physical activity'],
        tips: 'Excellent approach for promoting overall health and development!'
      },
      'Health Mediation': {
        title: 'The Health-Conscious Parent 💪',
        description: 'Your parents are concerned about the physical health effects of digital device use. They encourage you to use larger screens and remind you to maintain proper posture and distance from screens.',
        strengths: ['Physical health awareness', 'Ergonomic concern', 'Long-term health focus', 'Preventive care'],
        tips: 'Good awareness of digital health! Continue these habits for better posture and eye health.'
      },
      'Technical Controls': {
        title: 'The Tech-Savvy Parent 🔧',
        description: 'Your parents use technical tools and software to control and protect your digital activities. This can include parental controls, security software, and app-based monitoring.',
        strengths: ['Technical protection', 'Automatic enforcement', 'Threat prevention', 'Easy monitoring'],
        tips: 'Consider combining with communication for better understanding and cooperation.'
      },
      'Monitoring': {
        title: 'The Watchful Parent 👁️',
        description: 'Your parents actively check and monitor your online activities—what you visit, who you talk to, and what you download. This helps them stay aware of potential risks.',
        strengths: ['Awareness', 'Risk detection', 'Safety oversight', 'Accountability'],
        tips: 'Combine monitoring with trust and open communication for best results.'
      }
    };

    return profiles[primaryStrategy];
  };

  const parentProfile = getParentProfile();

  return (
    <div className="container results-container">
      <div className="header">
        <h1>📊 Your Results</h1>
        <p>Here's how your parents approach managing your digital activities</p>
      </div>

      <div className="results-content">
        <ChartVisualization data={chartData} />

        {parentProfile && (
          <ResultCard profile={parentProfile} />
        )}

        <div className="strategy-details">
          <h3>Your Parents' Mediation Strategies</h3>
          <div className="scores-grid">
            {chartData.map((item) => (
              <div key={item.name} className="score-card">
                <div className="score-header">
                  <span className="color-dot" style={{ backgroundColor: item.color }}></span>
                  <h4>{item.name}</h4>
                </div>
                <div className="score-value">
                  <span className="number">{item.score.toFixed(2)}</span>
                  <span className="out-of">/5</span>
                </div>
                <div className="score-bar">
                  <div 
                    className="score-fill" 
                    style={{ 
                      width: `${(item.score / 5) * 100}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h3>Understanding These Strategies</h3>
          <ul>
            <li><strong>Active Mediation:</strong> Your parents actively discuss and guide your online activities</li>
            <li><strong>Co-use Mediation:</strong> Your parents spend time online with you and do activities together</li>
            <li><strong>Restrictive Mediation:</strong> Your parents set rules limiting how long and what you do online</li>
            <li><strong>Diversion Mediation:</strong> Your parents encourage breaks and suggest alternative offline activities</li>
            <li><strong>Health Mediation:</strong> Your parents focus on physical health aspects of device use (posture, screen distance, etc.)</li>
            <li><strong>Technical Controls:</strong> Your parents use software and tools to manage your access</li>
            <li><strong>Monitoring:</strong> Your parents keep track of what you do online and who you interact with</li>
          </ul>
        </div>

        <button className="btn btn-primary btn-retake" onClick={onRetake}>
          Retake Survey
        </button>
      </div>
    </div>
  );
}

export default Results;
