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
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${p.url}" target="_blank" rel="noopener">View on GitHub →</a>
      </article>`
    )
    .join("");
}

function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
  toggle.textContent = saved === "dark" ? "🌙" : "☀️";

  toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    toggle.textContent = next === "dark" ? "🌙" : "☀️";
  });
}

function setupForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
