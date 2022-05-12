"use strict";

const navTab = document.querySelector(".nav__tabs");
const mobileMenu = document.querySelector(".nav__mobile");
const overlay = document.querySelector(".overlay");

const arrowUp = document.querySelectorAll(".icon-angle-up");
const arrowDown = document.querySelectorAll(".icon-angle-down");
const featuresList = document.querySelector(".nav__features");
const companyList = document.querySelector(".nav__company");
const mediaSize = 600;

mobileMenu.addEventListener("click", () => {
  const visibility = navTab.getAttribute("data-visible");

  console.log(visibility);
  if (visibility === "false") {
    navTab.setAttribute("data-visible", true);
    mobileMenu.setAttribute("aria-expanded", true);
    overlay.classList.remove("hidden");
  } else {
    navTab.setAttribute("data-visible", false);
    mobileMenu.setAttribute("aria-expanded", false);
    overlay.classList.add("hidden");
  }
});

const chkTab = function (i) {
  i === 0
    ? featuresList.classList.toggle("hidden")
    : companyList.classList.toggle("hidden");
};

const showDropDown = function (i) {
  console.log("Showing dropdown");
  console.log(arrowDown[i].classList);
  console.log(arrowUp[i].classList);
  arrowDown[i].classList.toggle("hidden");
  arrowUp[i].classList.toggle("hidden");
  console.log(arrowDown[i].classList);
  console.log(arrowUp[i].classList);
};

const hideDropDown = function (i) {
  console.log("Hiding dropdown");
  console.log(arrowDown[i].classList);
  console.log(arrowUp[i].classList);
  arrowDown[i].classList.toggle("hidden");
  arrowUp[i].classList.toggle("hidden");
  console.log(arrowDown[i].classList);
  console.log(arrowUp[i].classList);
};

arrowUp.forEach((icon, i) => {
  icon.addEventListener("click", function () {
    if (window.innerWidth <= mediaSize) {
      console.log("Less than inner width");
      chkTab(i);
      showDropDown(i);
    }
  });
});

arrowDown.forEach((icon, i) => {
  icon.addEventListener("click", function () {
    if (window.innerWidth <= mediaSize) {
      chkTab(i);
      hideDropDown(i);
    }
  });
});
