const btn = document.getElementById('helloBtn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  greeting.textContent = 'Hello, world!';
});

