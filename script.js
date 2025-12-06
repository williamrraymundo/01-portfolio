const projects = [
  { name: "Todo React", description: "Task manager built with React.", url: "https://github.com/williamrraymundo/02-todo-react" },
  { name: "Finance Dashboard", description: "Charts for income and expenses.", url: "https://github.com/williamrraymundo/03-finance-dashboard" },
  { name: "Users API", description: "REST API with Express.", url: "https://github.com/williamrraymundo/04-users-api" },
  { name: "Snake Game", description: "Classic snake on canvas.", url: "https://github.com/williamrraymundo/11-snake-game" },
  { name: "Claude Chatbot", description: "Terminal chatbot using the Claude API.", url: "https://github.com/williamrraymundo/20-claude-chatbot" },
];

function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="card">
