document.getElementById("hamburger").onclick = open;
let toggle = 0;

function open() {
  let hamburger = document.getElementById("hamburger");
  let overlay = document.getElementById("overlay");
  let logo = document.getElementById("logo");
  let hamMenu = document.getElementById("hamMenu");
  if (toggle == 0) {
    hamburger.classList.add("is-active");
    hamburger.style.backgroundColor = "white";
    logo.style.color = "white";
    overlay.classList.add("open");
    hamMenu.classList.add("fadeIn");
    hamMenu.classList.remove("fadeOut");
    toggle += 1;
  } else if (toggle == 1) {
    hamburger.classList.remove("is-active");
    overlay.classList.remove("open");
    logo.style.color = "black";
    hamMenu.classList.remove("fadeIn");
    hamMenu.classList.add("fadeOut");
    toggle -= 1;

  }
}
