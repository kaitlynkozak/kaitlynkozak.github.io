// Theme Toggle (Dark/Light)
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Reveal animations
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
});
revealElements.forEach(el => observer.observe(el));

// Animate skill bars
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = bar.dataset.skill;
  });
});
