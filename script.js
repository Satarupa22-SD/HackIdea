// Function to generate a unique idea for the project
function generateIdea() {
  // Array of creative project ideas
  const projectIdeas = [
    "Create a Smart Plant Watering System",
    "Design a Food Waste Reduction App",
    "Develop a Virtual Personal Assistant",
    "Create an Online Learning Platform",
    "Design a Smart Home Security System",
    "Build a Social Impact Tracking Platform",
    "Develop a Cryptocurrency Portfolio Tracker",
    "Create an Eco-friendly Transportation App",
    "Design a Health and Wellness Journal",
    "Build a Community Fundraising Platform",
    "Develop a Personal Finance Tracker",
    "Create a Disaster Management System",
    "Design a Collaborative Project Management Tool",
    "Build a Sustainable Fashion Marketplace",
    "Develop an Augmented Reality Museum Guide",
    "Create an AI-Powered Language Translator",
    "Build an Online Food Delivery Platform for Local Farmers",
    "Design an Eco-Friendly Home Automation System",
    "Create a Virtual Reality Training Simulator",
    "Develop a Mental Health Support App",
    // Add more project ideas here...
  ];

  // Array of corresponding project descriptions
  const projectDescriptions = [
    "Build an IoT-based smart plant watering system that monitors soil moisture levels and automatically waters plants when they become dry. Users can also control the system remotely through a mobile app.",
    "Develop a mobile app that connects restaurants, grocery stores, and food donors with local shelters and food banks to minimize food waste. The app enables seamless donation and distribution of surplus food.",
    "Design an AI-powered virtual personal assistant that can schedule appointments, set reminders, answer questions, and perform various tasks based on user commands, making daily life more organized and efficient.",
    "Build an interactive online learning platform that offers courses in various subjects. Users can access video lectures, quizzes, and assignments to enhance their skills and knowledge from the comfort of their homes.",
    "Develop a smart home security system that integrates with cameras, motion sensors, and door locks. The system sends real-time notifications to users' smartphones when suspicious activities are detected.",
    "Create a platform that allows social impact organizations to track and measure the effectiveness of their initiatives. The platform uses data analytics to provide valuable insights and progress reports.",
    "Design a cryptocurrency portfolio tracker that allows users to monitor their investments in different cryptocurrencies. The app displays real-time price changes, historical data, and provides performance analytics.",
    "Build a mobile app that promotes eco-friendly transportation options such as biking, walking, and public transit. The app provides route suggestions and tracks the user's carbon footprint.",
    "Develop a digital journal app that allows users to record their daily health habits, physical activities, and mood. The app offers personalized health tips and insights to encourage a healthy lifestyle.",
    "Create an online platform that enables individuals and organizations to raise funds for various causes and campaigns. Users can showcase their projects and collect donations from a global audience.",
    "Design a personal finance tracker that helps users manage their expenses, budgets, and investments. The app provides visualizations and alerts to ensure financial stability.",
    "Build a disaster management system that utilizes real-time data and AI algorithms to predict and respond to natural disasters. The system aids in early warnings and emergency relief efforts.",
    "Develop a project management tool that facilitates seamless collaboration among team members. The tool includes features like task assignment, progress tracking, and file sharing.",
    "Create an online marketplace that showcases sustainable and ethically produced fashion items. The platform connects environmentally conscious consumers with eco-friendly fashion brands.",
    "Design an AR-based museum guide app that enhances visitors' experiences by providing interactive and informative content about exhibits and artifacts.",
    "Develop a language translation app that uses machine learning algorithms to accurately translate text and speech between different languages.",
    "Build an e-commerce platform that connects local farmers and producers directly to consumers, enabling them to sell fresh produce and products online.",
    "Develop a home automation system that optimizes energy usage by controlling lighting, heating, and cooling based on user preferences and occupancy patterns.",
    "Build a VR training simulator that allows users to practice skills and tasks in a virtual environment, suitable for industries like healthcare, aviation, and education.",
    "Design a mental health support app that offers resources, guided meditation, and anonymous peer support to help users cope with stress and anxiety.",
    // Add more project descriptions here...
  ];

  // Get a random project index from the projectIdeas array
  const randomIndex = Math.floor(Math.random() * projectIdeas.length);
  const generatedIdea = projectIdeas[randomIndex];
  const generatedDescription = projectDescriptions[randomIndex];

  // Display the generated idea and description in the respective fields
  const ideaTextElement = document.getElementById("ideaText");
  const descriptionElement = document.getElementById("description");

  ideaTextElement.value = generatedIdea;
  descriptionElement.value = generatedDescription;
}

// Function to reset the page to its initial condition (refresh the page)
function resetForm() {
  window.location.reload(); // Refresh the page to its initial state
}

// Attach event listeners to the buttons
document.getElementById("generateButton").addEventListener("click", generateIdea);
document.getElementById("resetButton").addEventListener("click", resetForm);
