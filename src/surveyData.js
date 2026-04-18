export const surveyData = {
  section1: {
    title: "How often does your parent/carer do any of these things?",
    scale: ["Never (1)", "Rarely (2)", "Sometimes (3)", "Often (4)", "Very often (5)"],
    category: "Active & Restrictive Mediation",
    items: [
      { id: 'a', text: 'Encourage me to explore and learn things on the Internet', strategy: 'Active Mediation' },
      { id: 'b', text: 'Suggest ways to use the Internet safely', strategy: 'Active Mediation' },
      { id: 'c', text: 'Help me when something is difficult to do or find on the Internet', strategy: 'Active Mediation' },
      { id: 'd', text: 'Explain why some websites are appropriate or inappropriate', strategy: 'Active Mediation' },
      { id: 'e', text: 'Talk to me about the commercial activities I am exposed to online', strategy: 'Active Mediation' },
      { id: 'f', text: 'Sit with me while I use the Internet', strategy: 'Co-use Mediation' },
      { id: 'g', text: 'Do activities together with me on the Internet', strategy: 'Co-use Mediation' },
      { id: 'h', text: 'Limit how long or when I go online', strategy: 'Restrictive Mediation' },
      { id: 'i', text: 'Limit what I am allowed to do online', strategy: 'Restrictive Mediation' },
      { id: 'j', text: 'Request that I take breaks from digital device', strategy: 'Diversion Mediation' },
      { id: 'k', text: 'Suggest alternative activities instead of digital activities (such as playing outside)', strategy: 'Diversion Mediation' },
      { id: 'l', text: 'Request that I use a device with bigger screen', strategy: 'Health Mediation' },
      { id: 'm', text: 'Remind or monitor me to sit at a certain distance from the screen', strategy: 'Health Mediation' },
    ]
  },
  section2: {
    title: "Does your parent/carer make use of any of the following on your digital devices?",
    scale: ["No (0)", "Yes (1)", "Don't know"],
    category: "Technical Controls",
    items: [
      { id: 'tc1', text: 'Software that limits the time I spent online', strategy: 'Technical Controls' },
      { id: 'tc2', text: 'Software to prevent viruses', strategy: 'Technical Controls' },
      { id: 'tc3', text: 'Ad blocking software or extensions', strategy: 'Technical Controls' },
      { id: 'tc4', text: 'Minor mode in Apps', strategy: 'Technical Controls' },
    ]
  },
  section3: {
    title: "How often does your parent/carer check the following things?",
    scale: ["Never (1)", "Rarely (2)", "Sometimes (3)", "Often (4)", "Very often (5)"],
    category: "Monitoring",
    items: [
      { id: 'm1', text: 'Which friends or contacts I add to my social networking profile/instant messaging service', strategy: 'Monitoring' },
      { id: 'm2', text: 'The messages in my chat history for communicating with people', strategy: 'Monitoring' },
      { id: 'm3', text: 'My profile on a social networking site or online community', strategy: 'Monitoring' },
      { id: 'm4', text: 'Which websites I visited', strategy: 'Monitoring' },
      { id: 'm5', text: 'The apps I downloaded', strategy: 'Monitoring' },
      { id: 'm6', text: 'The in-app purchases I made', strategy: 'Monitoring' },
      { id: 'm7', text: 'My search history', strategy: 'Monitoring' },
      { id: 'm8', text: 'Monitor my use of digital devices by using a camera in my room', strategy: 'Monitoring' },
      { id: 'm9', text: 'My screen time', strategy: 'Monitoring' },
    ]
  }
};

export const strategies = [
  { name: 'Active Mediation', color: '#667eea', description: 'Guiding and discussing online activities with your child' },
  { name: 'Co-use Mediation', color: '#764ba2', description: 'Enjoying digital activities together with your child' },
  { name: 'Restrictive Mediation', color: '#f093fb', description: 'Setting rules and limiting online activities' },
  { name: 'Diversion Mediation', color: '#4facfe', description: 'Encouraging breaks and alternative activities' },
  { name: 'Health Mediation', color: '#00f2fe', description: 'Promoting healthy digital device usage habits' },
  { name: 'Technical Controls', color: '#43e97b', description: 'Using technology to control access and protect' },
  { name: 'Monitoring', color: '#fa709a', description: 'Checking or keeping track of online activities' }
];
