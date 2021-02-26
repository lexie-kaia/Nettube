const sideBar = document.querySelector('#jsSideBar');
const mainDiv = document.querySelector('.div_main');

function init() {
  const mainDivHeight = mainDiv.offsetHeight;
  const viewportHeight = window.innerHeight;
  if (mainDivHeight + 56 < viewportHeight) {
    sideBar.style.height = `${viewportHeight - 56}px`;
  }
}

if (sideBar) {
  init();
}
