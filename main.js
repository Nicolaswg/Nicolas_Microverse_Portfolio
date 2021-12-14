const mobilMenu = function menu() {
  const mobileMenu = document.querySelector('#mobile-links');
  const links = document.querySelectorAll('#mobile-links li');
  const activeLinks = document.querySelectorAll('.menu-links');
  const toggleBtn = document.querySelector('.mobile-hamburguer');
  const projectContent = document.querySelector('#main');
  const menuClose = document.querySelector('.close-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
      projectContent.classList.toggle('main');
      menuClose.classList.toggle('links-active')
      toggleBtn.classList.toggle('links-active');
    });
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.toggle('mobile-menu-link');
      activeLinks.forEach((link) => {
        link.classList.toggle('links-active');
        projectContent.classList.toggle('main');
        menuClose.classList.toggle('links-active');
        toggleBtn.classList.toggle('links-active');
      });
      toggleBtn.classList.toggle('active');
    });
  });

  menuClose.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
      projectContent.classList.toggle('main');
      menuClose.classList.toggle('links-active')
      toggleBtn.classList.toggle('links-active');
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
