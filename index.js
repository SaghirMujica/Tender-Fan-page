let animated = document.querySelectorAll(".animated");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i=0; i<animated.length; i++) {
    let heightAnimated = animated[i].offsetTop;
    if(heightAnimated - 700 < scrollTop) {
      animated[i].style.opacity = 1;
      animated[i].classList.add("showUp");
    }
  }
}

window.addEventListener('scroll', showScroll);