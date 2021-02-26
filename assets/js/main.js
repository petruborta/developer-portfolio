let prevScrollPos = window.pageYOffset;

const navBar = document.querySelector(".navbar");
const navWrapper = navBar.querySelector(".nav-wrapper");
const logo = navWrapper.querySelector(".logo");
const nav = navWrapper.querySelector("nav");
const menuButton = document.querySelector(".menu-btn");
const menuItems = nav.querySelectorAll("li");

menuButton.onclick = toggleNav;
menuItems.forEach(menuItem => {
  menuItem.onclick = toggleNav;
});

window.onscroll = handleScroll;
window.onresize = handleResize;

function handleScroll() {
  if (window.pageYOffset > 150) {
    navBar.style.backgroundColor = "black";
  } else {
    navBar.style.backgroundColor = "transparent";
  }

  if (scrolledDown()) {
    if (onTablet()) {
      if (!navIsOpen()) {
        transform(navBar, "translateY(-100%)");
      }
    } else {
      setHeightAndWidth(logo, "50px");
    }
  } else {
    if (onTablet()) {
      transform(navBar, "translateY(0)");
    } else {
      setHeightAndWidth(logo, "75px");
    }
  }

  updatePrevPosition();
}

function handleResize() {
  if (onTablet()) {
    if (window.innerWidth < 768) {
      setHeightAndWidth(logo, "50px");
    } else {
      setHeightAndWidth(logo, "75px");
    }
  } else {
    if (navIsOpen()) {
      removeClassFrom(menuButton, "close");
      removeClassFrom(nav, "open");
    }

    transform(navBar, "translateY(0)");
    setHeightAndWidth(logo, "75px");
  }
}

function onTablet() {
  return window.innerWidth < 1024;
}

function scrolledDown() {
  return prevScrollPos < window.pageYOffset;
}

function navIsOpen() {
  return nav.classList.contains("open");
}

function updatePrevPosition() {
  prevScrollPos = window.pageYOffset;
}

function setHeightAndWidth(element, value) {
  element.style.height = value;
  element.style.width = value;
}

function transform(element, value) {
  element.style.transform = value;
}

function toggleNav() {
  toggleClassOf(menuButton, "close");
  toggleClassOf(nav, "open");
}

function toggleClassOf(element, className) {
  element.classList.toggle(className);
}
