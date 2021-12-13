const mobilMenu = function () {
  const mobileMenu = document.querySelector("#mobile-links");
  const links = document.querySelectorAll("#mobile-links li a");
  const toggleBtn = document.querySelector(".mobile-hamburguer");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu-link");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu-link");
    });
  });
};

mobilMenu();
