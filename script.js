const btn = document.getElementById('helloBtn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  greeting.textContent = 'Hello from User 1!';
});

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
greeting.textContent = 'Welcome!';
});
