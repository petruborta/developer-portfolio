let prevScrollPos = window.pageYOffset;

const navBar = document.querySelector(".navbar");
const navWrapper = navBar.querySelector(".nav-wrapper");
const logo = navWrapper.querySelector(".logo");
const nav = navWrapper.querySelector("nav");
const menuButton = document.querySelector(".menu-btn");
const menuItems = nav.querySelectorAll(".menu-item");

const sections = document.querySelectorAll("#home, #about, #skills, #projects, #contact");

menuButton.onclick = toggleNav;
menuItems.forEach(menuItem => {
  menuItem.onclick = () => {
    toggleNav();
    removeClassFromArray(menuItems, "current");
    addClassTo(menuItem, "current");
  };
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

  changeCurrentSectionOnScroll(sections, menuItems);
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

function changeCurrentSectionOnScroll(sections, menuItems) {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    if (sectionOccupiesMostPartOfViewport(rect)) {
      removeClassFromArray(menuItems, "current");
      addClassTo(menuItems[i], "current");
    }
  }
}

function sectionOccupiesMostPartOfViewport(section) {
  return section.top < window.innerHeight * 0.45
    && section.bottom > window.innerHeight * 0.25;
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

function addClassTo(element, className) {
  element.classList.add(className);
}

function removeClassFromArray(arr, className) {
  arr.forEach(element => {
    removeClassFrom(element, className);
  });
}

function removeClassFrom(element, className) {
  element.classList.remove(className);
}

function toggleClassOf(element, className) {
  element.classList.toggle(className);
}
