const menuToggle = () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const menuToggleIcon = document.querySelector('.menu-toggle');
  navbarNav.classList.toggle('toggled');
  menuToggleIcon.classList.toggle('toggled');
}