document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) {
    console.error('Brak .nav-toggle lub .main-nav');
    return;
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
