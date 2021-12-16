// Main.js variables
const projectBtn = document.querySelectorAll('.project-buttom');
const form = document.getElementById('form');
const email = document.getElementById('email');
const validationMsg = document.getElementById('validation-message');

// Form Validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formMessage = ['Email should be in lower case', 'Submition aproved'];
  const emailAddres = email.value;
  if (emailAddres.toLowerCase() !== emailAddres) {
    validationMsg.classList.add('contact-button-message');
    validationMsg.innerHTML = `${formMessage[0]}`;
  } else {
    validationMsg.innerHTML = `${formMessage[1]}`;
  }
});
// Mobile menu function
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
  Object.keys(attrObj).forEach((attr) => {
    if (Object.prototype.hasOwnProperty.call(attrObj, attr)) {
      element.setAttribute(attr, attrObj[attr]);
    }
  });
};
// HTML and chidl generator
const createCustomElement = (element, attributes, children) => {
  const customElement = document.createElement(element);
  if (children !== undefined) {
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  }
  addAttributes(customElement, attributes);
  return customElement;
};
// Print modal-bg and modal content containers
const printModal = (content) => {
  const modalContent = createCustomElement('div', {
    id: 'modal-content',
    class: 'modal',
  }, [content]);

  const modalContainer = createCustomElement('div', {
    id: 'modal-container',
    class: 'modal-bg',
  }, [modalContent]);

  document.body.appendChild(modalContainer);
};

const modalProject = [
  {
    title: 'Tonic',
    img: 'src/portfolio_img_a.PNG',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos beatae tenetur, quas, quidem incidunt maiores quo ipsum vitae exercitationem dicta perferendis quasi odio distinctio ex id dolore eum nobis soluta illum. Id sint similique suscipit, reprehenderit accusantium debitis esse quod nihil culpa quas. Porro saepe alias reprehenderit sapiente dolores non?',
    pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
    sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    img: 'src/portfolio_img_b.PNG',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos beatae tenetur, quas, quidem incidunt maiores quo ipsum vitae exercitationem dicta perferendis quasi odio distinctio ex id dolore eum nobis soluta illum. Id sint similique suscipit, reprehenderit accusantium debitis esse quod nihil culpa quas. Porro saepe alias reprehenderit sapiente dolores non?',
    pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
    sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
  },
  {
    title: 'Tonic',
    img: 'src/portfolio_img_c.PNG',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos beatae tenetur, quas, quidem incidunt maiores quo ipsum vitae exercitationem dicta perferendis quasi odio distinctio ex id dolore eum nobis soluta illum. Id sint similique suscipit, reprehenderit accusantium debitis esse quod nihil culpa quas. Porro saepe alias reprehenderit sapiente dolores non?',
    pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
    sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
  },
  {
    title: 'Tonic',
    img: 'src/portfolio_img_d.PNG',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos beatae tenetur, quas, quidem incidunt maiores quo ipsum vitae exercitationem dicta perferendis quasi odio distinctio ex id dolore eum nobis soluta illum. Id sint similique suscipit, reprehenderit accusantium debitis esse quod nihil culpa quas. Porro saepe alias reprehenderit sapiente dolores non?',
    pageLink: 'https://nicolaswg.github.io/Nicolas_Microverse_Portfolio/',
    sourcesLink: 'https://github.com/Nicolaswg/Nicolas_Microverse_Portfolio',
  }];
// Modal projects event
// First Modal
projectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    printModal(`<div class="modal-header-container">
    <div class="modal-title-container">
      <h2 class="modal-title">${modalProject[index].title}</h2></div>
      <div class="modal-header-icon">
        <i id ="close-menu" class="fas fa-times"></i>
      </div>
    </div>
    <div class="modal-subtitle-container">
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
    </div>
    <div class="modal-img">
      <img src="${modalProject[index].img}" alt="modal-img">
    </div>

    <div class="container">
    <div class="modal-description-container">
      <p class="modal-description">${modalProject[index].description}</p>
    </div>
    
    <div class="modal-skills-container">
    <ul class="modal-skills">
    <li>
      <p>html</p>
    </li>
    <li>
      <p>css</p>
    </li>
    <li>
      <p>javascript</p>
    </li>
  </ul>
  <div class="modal-buttons-container">
  <div class="modal-btn">
    <a href="${modalProject[index].pageLink}">See live</a>
    <i class="fas fa-external-link-alt"></i>
  </div>
  <div class="modal-btn">
    <a href="${modalProject[index].sourcesLink}">See sources</a>
    <i class="fab fa-github"></i>
  </div>
</div>
  </div>
    </div>`);

    const modalContainer = document.querySelector('#modal-container');
    const modalRemover = document.querySelector('#close-menu');
    modalRemover.addEventListener('click', () => {
      modalContainer.remove();
    });
  });
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22
      || e.code === 1014 || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  const input = [form.fullname, form.email, form.message];
  input.forEach((input) => {
    input.addEventListener('input', () => {
      const objData = {
        fullname: form.fullname.value,
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('data', JSON.stringify(objData));
    });
  });
  const getData = JSON.parse(localStorage.getItem('data'));

  form.fullname.value = getData.fullname;
  form.email.value = getData.email;
  form.message.value = getData.message;
}

mobilMenu();