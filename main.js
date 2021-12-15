// Main.js variables
const projectBtn = document.querySelectorAll('.project-buttom');

// Mobiel menu function
const mobilMenu = function menu() {
  const mobileMenu = document.querySelector('#mobile-links');
  const links = document.querySelectorAll('#mobile-links li');
  const activeLinks = document.querySelectorAll('.menu-links');
  const toggleBtn = document.querySelector('.mobile-hamburguer');
  const projectContent = document.querySelector('#main');
  const menuClose = document.querySelector('.close-menu');
  // Hamburguer click event
  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
      projectContent.classList.toggle('main');
      menuClose.classList.toggle('links-active');
      toggleBtn.classList.toggle('links-active');
    });
  });
  // Hamburguer links click event
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
  // hamburguer close menu click event
  menuClose.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-link');
    activeLinks.forEach((link) => {
      link.classList.toggle('links-active');
      projectContent.classList.toggle('main');
      menuClose.classList.toggle('links-active');
      toggleBtn.classList.toggle('links-active');
    });
  });
  // hamburguer menu accesibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      mobileMenu.classList.toggle('mobile-menu-link');
      activeLinks.forEach((link) => {
        link.classList.toggle('links-active');
      });
    }
  });
};

// Dynamic modal js functions

// object element actribute generator
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};
// HTML and chidl generator
const createCustomElement = (element,attributes,children) => {
  let customElement = document.createElement(element);
  if (children !== undefined) children.forEach(el => {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement,attributes);
  return customElement;
};
// Print modal-bg and modal content containers
const printModal = content => {
  const modalContent = createCustomElement('div',{
    id: 'modal-content',
    class: 'modal',
  },[content]);
  
  const modalContainer = createCustomElement('div',{
    id: 'modal-container',
    class: 'modal-bg',
  },[modalContent]);
  // Show modal in the dom  
  document.body.appendChild(modalContainer);
  // remmove modal from dom
  const removeModal = () => {
    document.body.removeChild(modalContainer);
  }
}

const modalProject =[
  {
  title: 'Tonic',
  img: 'src/modal-img-a.png',
  pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
  sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
},
{
  title: 'Multi-Post Stories',
  img: 'src/portfolio_img_b.PNG',
  pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
  sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
},
{
  title: 'Tonic',
  img: 'src/portfolio_img_c.PNG',
  pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
  sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
},
{
  title: 'Multi-Post Stories',
  img: 'src/portfolio_img_d.PNG',
  pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
  sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
}]
// Modal projects event
// First Modal
projectBtn.forEach((btn,index) => {
  btn.addEventListener('click', () => {
      printModal(`<h2 class="modal-title">${modalProject[index].title}</h2>
      <i id ="close-menu" class="fas fa-times"></i>
      <ul class="modal-mark">
        <li>
          <p>CANOPY</p>
        </li>
        <li>
          <p>Back End Dev</p>
        </li>
        <li>
          <p>2015</p>
        </li>
      </ul>
      <div class="modal-img">
        <img src="${modalProject[index].img}" alt="modal img">
      </div>
      <p class="modal-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus inventore nulla doloribus quia! Ea dolor, sequi reprehenderit architecto eum magnam molestiae dolore quae officia, minus voluptatum animi reiciendis qui illo ipsam nisi soluta culpa? Incidunt, minus, eaque dolorem doloremque enim tempore ipsum debitis dignissimos recusandae laborum sit harum sequi quibusdam provident officia nam odit vitae illum magni laudantium soluta voluptatem.
      </p>
      <ul class="modal-skills">
        <li>
          <p href="">html</p>
        </li>
        <li>
          <p href="">css</p>
        </li>
        <li>
          <p href="">javascript</p>
        </li>
      </ul>
      <div class="modal-buttons">
        <div class="modal-btn">
          <a href="${modalProject[index].pageLink}">See live</a>
          <i class="fas fa-external-link-alt"></i>
        </div>
        <div class="modal-btn">
          <a href="${modalProject[index].sourcesLink}">See Source</a>
          <i class="fab fa-github"></i>
        </div>
      </div>`);

  const modalContainer = document.querySelector('#modal-container')
  const modalRemover = document.querySelector('#close-menu');
  modalRemover.addEventListener('click', () => {
    modalContainer.remove();
});
  });
});
mobilMenu();