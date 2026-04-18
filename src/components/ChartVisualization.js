import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './ChartVisualization.css';

function ChartVisualization({ data }) {
  const [chartType, setChartType] = React.useState('bar');

  const radarData = data.map(item => ({
    ...item,
    fullMark: 5
  }));

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button 
          className={`chart-btn ${chartType === 'bar' ? 'active' : ''}`}
          onClick={() => setChartType('bar')}
        >
          📊 Bar Chart
        </button>
        <button 
          className={`chart-btn ${chartType === 'radar' ? 'active' : ''}`}
          onClick={() => setChartType('radar')}
        >
          🎯 Radar Chart
        </button>
      </div>

      {chartType === 'bar' ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 5]} 
              label={{ value: 'Score (out of 5)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value) => value.toFixed(2)}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '2px solid #667eea',
                borderRadius: '6px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar 
              dataKey="score" 
              fill="#667eea"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Bar key={index} dataKey="score" fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData} margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>
            <PolarGrid stroke="#e0e0e0" />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              angle={90}
              orientation="outer"
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 5]}
              tick={{ fontSize: 11 }}
            />
            <Radar 
              name="Score" 
              dataKey="score" 
              stroke="#667eea" 
              fill="#667eea" 
              fillOpacity={0.6}
              animationDuration={1000}
            />
            <Tooltip 
              formatter={(value) => value.toFixed(2)}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '2px solid #667eea',
                borderRadius: '6px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}

      <div className="chart-info">
        <p>Higher scores indicate stronger use of that parental mediation strategy.</p>
      </div>
    </div>
  );
}

export default ChartVisualization;
