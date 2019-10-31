let headerNav = document.getElementById("header");
let sticky = headerNav.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    headerNav.classList.add("sticky-header")
    console.log('added sticky');
  } else {
    headerNav.classList.remove("sticky-header");
  }

  if (window.pageYOffset <= sticky) {
    headerNav.classList.remove("sticky-header");
    console.log('removed sticky');
  }
}