document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.secao-oculta');

  const observerOptions = {
    root: null, // Observa a viewport inteira
    rootMargin: '0px',
    threshold: 0.1 // O callback será executado quando 10% do elemento estiver visível
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Se a seção está visível
        entry.target.classList.add('secao-revelada');
        observer.unobserve(entry.target); // Opcional: Para que a animação aconteça apenas uma vez
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});