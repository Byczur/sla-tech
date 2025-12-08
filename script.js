// Prosty JS: obsługa mobilnego menu i aktualizacja roku w stopce
document.addEventListener('DOMContentLoaded', function () {
  // Toggle dla kilku nagłówków: jeśli przyciski mają różne id, we szablonie są 4 różne
  ['navToggle','navToggle2','navToggle3','navToggle4'].forEach(btnId=>{
    const btn = document.getElementById(btnId);
    if(!btn) return;
    const nav = btn.nextElementSibling;
    btn.addEventListener('click', ()=>{
      if(nav) nav.classList.toggle('open');
    });
  });

  // Ustaw aktualny rok w każdym stopce
  const years = document.querySelectorAll('#year, #year2, #year3, #year4');
  const y = new Date().getFullYear();
  years.forEach(el => el.textContent = y);

  // Smooth scrolling for anchor links (internal)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
// Prosty JS: obsługa mobilnego menu i aktualizacja roku w stopce
document.addEventListener('DOMContentLoaded', function () {
  // Toggle dla kilku nagłówków: jeśli przyciski mają różne id, we szablonie są 4 różne
  ['navToggle','navToggle2','navToggle3','navToggle4'].forEach(btnId=>{
    const btn = document.getElementById(btnId);
    if(!btn) return;
    const nav = btn.nextElementSibling;
    btn.addEventListener('click', ()=>{
      if(nav) nav.classList.toggle('open');
    });
  });

  // Ustaw aktualny rok w każdym stopce
  const years = document.querySelectorAll('#year, #year2, #year3, #year4');
  const y = new Date().getFullYear();
  years.forEach(el => el.textContent = y);

  // Smooth scrolling for anchor links (internal)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
