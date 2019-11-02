/*!
 * Active Link states on scroll
 */
const links = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('.section-title');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 135 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');

  if (window.scrollY==0) {
    links[index].classList.remove('active');
  }
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
