# 📱 Parental Mediation Survey

A React-based survey application where children can assess their parents' parental mediation strategies and receive personalized results with visualizations.

## 🎯 Overview

This survey helps children understand how their parents manage their digital activities across 5 key strategies:
- **Active Mediation** - Guiding & discussing online activities
- **Co-use Mediation** - Enjoying digital activities together
- **Restrictive Mediation** - Setting limits and rules
- **Technical Controls** - Using software/tools to manage access
- **Monitoring** - Checking/tracking online activities

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm

### Installation & Running

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📋 Survey Structure

### Section 1: General Parental Behaviors (13 items)
5-point Likert scale (Never to Very Often)
- Questions a-e: Active Mediation
- Questions f-g: Co-use Mediation  
- Questions h-m: Restrictive Mediation

### Section 2: Technical Controls (4 items)
Yes/No/Don't Know responses
- Tools used for parental control

### Section 3: Monitoring Activities (9 items)
5-point Likert scale (Never to Very Often)
- What parents check/monitor

## 📊 Results

After completing all sections, users see:
- **Visual Charts**: Bar chart and radar chart showing scores for each strategy
- **Parental Profile**: A personalized description of the parent based on their dominant strategy
- **Average Scores**: Specific numerical scores (0-5) for each mediation type
- **Strategy Breakdown**: Detailed explanation of each strategy

## 🛠️ Technologies

- **React** 18.2.0
- **Recharts** - Data visualization (bar & radar charts)
- **Modern CSS** - Responsive design with gradients and animations

## 📁 Project Structure

```
src/
├── App.js                    # Main app component
├── surveyData.js            # Survey questions & strategy definitions
├── components/
│   ├── Survey.js            # Multi-step survey container
│   ├── Section.js           # Individual survey section
│   ├── Results.js           # Results display component
│   ├── ResultCard.js        # Parental profile card
│   └── ChartVisualization.js # Charts (bar & radar)
└── [CSS files]              # Styling for each component
```

## 🎨 Features

✅ Multi-step survey with progress tracking
✅ Beautiful gradient UI with smooth animations
✅ Responsive design (mobile & desktop)
✅ Dual chart visualization (bar & radar)
✅ Personalized parental profile results
✅ Average scoring across all strategies
✅ Clear strategy explanations & insights

## 📝 Notes

- All responses are processed locally - no data is sent to servers
- Results are calculated based on average scores for each mediation strategy
- Technical controls (Section 2) are mapped to 1-5 scale for visualization consistency
