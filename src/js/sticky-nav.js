/*!
 * Sticky Header Navigation
 */
let headerNav = document.getElementById("header");
let sticky = headerNav.offsetTop;
let termsTOC = document.getElementById("toc-list");


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    headerNav.classList.add("sticky-header");
    termsTOC.classList.add("sticky-toc");
    // console.log('added sticky');
  } else {
    headerNav.classList.remove("sticky-header");
    termsTOC.classList.remove("sticky-toc");
  }

  if (window.pageYOffset <= sticky) {
    headerNav.classList.remove("sticky-header");
    termsTOC.classList.remove("sticky-toc");
    // console.log('removed sticky');
  }
}
