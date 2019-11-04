/*!
 * Sticky Header Navigation
 */
let headerNav = document.getElementById("header");
let sticky = headerNav.offsetTop;
let termsTOC = document.getElementById("toc-list");
// let titles = document.querySelectorAll('.section-title');

//Homepage Sticky Navigation
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    headerNav.classList.add("sticky-header");
    // console.log('added sticky');
  } else {
    headerNav.classList.remove("sticky-header");
  }

  if (window.pageYOffset <= sticky) {
    headerNav.classList.remove("sticky-header");
    // console.log('removed sticky');
  }
}
//Terms & Privacy  - TOC Sticky Navigation
function stickyNavToc() {
  if (window.pageYOffset >= sticky) {
    headerNav.classList.add("sticky-header");
    termsTOC.classList.add("sticky-toc");
    // console.log('added TOC sticky');
  } else {
    headerNav.classList.remove("sticky-header");
    termsTOC.classList.remove("sticky-toc");
  }

  if (window.pageYOffset <= sticky) {
    headerNav.classList.remove("sticky-header");
    termsTOC.classList.remove("sticky-toc");
    // console.log('removed TOC sticky');
  }
}
