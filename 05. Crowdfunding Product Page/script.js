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