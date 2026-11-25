// Año automático en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Animación suave al aparecer las secciones
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.card, .gallery figure, .ba .box, .who .col, .ticket, details').forEach((el) => {
  el.classList.add('reveal'); io.observe(el);
});

// Cerrar las otras preguntas al abrir una
document.querySelectorAll('.faq details').forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) document.querySelectorAll('.faq details').forEach((o) => { if (o !== d) o.open = false; });
  });
});
