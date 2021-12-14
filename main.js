const mobilMenu = function menu() {
  const mobileMenu = document.querySelector('#mobile-links');
  const links = document.querySelectorAll('#mobile-links li');
  const activeLinks = document.querySelectorAll('.menu-links');
  const toggleBtn = document.querySelector('.mobile-hamburguer');
  const projectContent = document.querySelector('#main');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
      projectContent.classList.toggle('main');
    });
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.toggle('mobile-menu-link');
      activeLinks.forEach((link) => {
        link.classList.toggle('links-active');
        projectContent.classList.toggle('main')
      });
      toggleBtn.classList.toggle('active');
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      mobileMenu.classList.toggle('mobile-menu-link');
      activeLinks.forEach((link) => {
        link.classList.toggle('links-active');
      });
    }
  });
};

mobilMenu();
