const menuToggle = () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const menuToggleIcon = document.querySelector('.menu-toggle');
  navbarNav.classList.toggle('toggled');
  menuToggleIcon.classList.toggle('toggled');
}

const showModal = () => {
  const modal = document.querySelector('#modal');
  modal.style.display = "flex";
}

const closeModal = () => {
  const modal = document.querySelector('#modal');
  modal.style.display = "none";
}


let count = 0;
let last = undefined;

const selected = (el) => {
  if(count === 0) {
    document.querySelectorAll('.card-booking')[el].style.display = 'flex';
    document.querySelectorAll('.card-input .checkbox')[el].style.background = 'hsl(176, 50%, 47%)';
    count++;
    last = el;
  } else {
    document.querySelectorAll('.card-booking')[last].style.display = 'none';
    document.querySelectorAll('.card-input .checkbox')[last].style.background = 'none';
    document.querySelectorAll('.card-input .checkbox')[el].style.background = 'hsl(176, 50%, 47%)';
    document.querySelectorAll('.card-booking')[el].style.display = 'flex';
    last = el;
  }
}

const showSuccess = () => {
  closeModal();

  const success = document.querySelector('#success');
  success.style.display = 'flex';
}

const closeSuccess = () => {
  const success = document.querySelector('#success');
  success.style.display = 'none';
}