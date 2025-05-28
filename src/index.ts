import '../task_1/main';
const app = document.getElementById('app');

if (app) {
  app.innerHTML = '<p>Hello from TypeScript!</p>';
} else {
  console.error('App container not found');
}

