"use strict";

const navTab = document.querySelector(".nav__tabs");
const mobileMenu = document.querySelector(".nav__mobile");

const arrowUp = document.querySelectorAll(".icon-angle-up");
const arrowDown = document.querySelectorAll(".icon-angle-down");
const featuresList = document.querySelector(".header__features__list");
const companyList = document.querySelector(".header__company__list");

mobileMenu.addEventListener("click", () => {
  const visibility = navTab.getAttribute("data-visible");

  console.log(visibility);
  if (visibility === "false") {
    navTab.setAttribute("data-visible", true);
    mobileMenu.setAttribute("aria-expanded", true);
  } else {
    navTab.setAttribute("data-visible", false);
    mobileMenu.setAttribute("aria-expanded", false);
  }
});

const chkTab = function (i) {
  i === 0
    ? featuresList.classList.toggle("invisible")
    : companyList.classList.toggle("invisible");
};

const showDropDown = function (i) {
  console.log("Showing dropdown");
  arrowDown[i].classList.toggle("invisible");
  arrowUp[i].classList.toggle("invisible");
};

const hideDropDown = function (i) {
  console.log("Hiding dropdown");
  arrowDown[i].classList.toggle("invisible");
  arrowUp[i].classList.toggle("invisible");
};

arrowUp.forEach((icon, i) => {
  icon.addEventListener("click", function () {
    chkTab(i);
    showDropDown(i);
  });
});

arrowDown.forEach((icon, i) => {
  icon.addEventListener("click", function () {
    chkTab(i);
    hideDropDown(i);
  });
});
