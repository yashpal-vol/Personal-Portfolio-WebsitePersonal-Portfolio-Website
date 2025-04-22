document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const details = card.querySelector('.project-details');
        details.classList.toggle('d-none');
      });
    });
  });