/* ── Hero title word-by-word reveal ── */
const titleText = "O primeiro assistente financeiro com IA que realmente entende seu dinheiro";
const titleEl = document.getElementById('hero-title');
const words = titleText.split(' ');
titleEl.innerHTML = words.map((w, i) =>
  `<span class="hero-word" style="transition-delay:${i * 0.06}s">${w} </span>`
).join('');

setTimeout(() => {
  document.querySelectorAll('.hero-word').forEach(w => w.classList.add('show'));
}, 300);

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Smooth scroll para links do menu ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('nav')?.offsetHeight || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
