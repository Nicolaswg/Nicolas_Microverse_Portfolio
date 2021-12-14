const mobilMenu = function () {
const mobileMenu = document.querySelector('#mobile-links');
const links = document.querySelectorAll('#mobile-links li');
const activeLinks = document.querySelectorAll('.menu-links');
const toggleBtn = document.querySelector('.mobile-hamburguer');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-link');
  activeLinks.forEach((link) => {
    link.classList.toggle('links-active');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
    });
    toggleBtn.classList.toggle('active');
  });
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Tab') {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach( (link) => {
      link.classList.toggle('links-active');
    });
  }
});

$(document).ready(function(){
  $('.mobile-hamburguer').click(function(){
    $('.mobile-hamburguer').toggleClass('active')
  });
});
};

mobilMenu();
