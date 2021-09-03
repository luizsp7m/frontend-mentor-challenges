function menuToggled() {
  const navbarNav = document.querySelector('#navbar-nav');
  const menuHamburger  = document.querySelector('.menu-toggle > img');
  menuHamburger.classList.toggle('toggled');
  navbarNav.classList.toggle('toggled');
}