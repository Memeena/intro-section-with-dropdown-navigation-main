"use strict";

const navTab = document.querySelector(".nav__tabs");
const mobileMenu = document.querySelector(".nav__mobile");
const overlay = document.querySelector(".overlay");

const arrowUp = document.querySelectorAll(".icon-angle-up");
const arrowDown = document.querySelectorAll(".icon-angle-down");

const featureArrowUp = document.querySelector(".feature-up-icon");
const featureArrowDown = document.querySelector(".feature-down-icon");
const featuresList = document.querySelector(".nav__features");

const companyArrowUp = document.querySelector(".company-up-icon");
const companyArrowDown = document.querySelector(".company-down-icon");
const companyList = document.querySelector(".nav__company");
const menuContainer = document.querySelector(".menu-container");

let featureClicked = false,
  companyClicked = false;

//Displaying mobile menu
mobileMenu.addEventListener("click", () => {
  const visibility = navTab.getAttribute("data-visible");

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

//Initial values for the sub menu
const init = function () {
  featuresList.classList.add("hidden");
  companyList.classList.add("hidden");
};

//Function to toggle arrow icons
const toggleArrowIcon = function (i) {
  arrowDown[i].classList.toggle("hidden");
  arrowUp[i].classList.toggle("hidden");
};

init();

//Displaying the sub menu
menuContainer.addEventListener("click", function (e) {
  e.preventDefault();

  //Checking which tab is clicked
  const tab = e.target.closest(".nav__link").getAttribute("data-item");

  //Guard clause
  if (!tab) return;

  if (tab === "1") {
    //Closing feature sub menu if open already
    if (featureClicked) {
      featuresList.classList.add("hidden");
      featureClicked = false;
    } else {
      //Opening feature sub menu
      featuresList.classList.remove("hidden");
      featureClicked = true;
    }
  } else if (tab === "2") {
    //Closing company sub menu if open already
    if (companyClicked) {
      companyList.classList.add("hidden");
      companyClicked = false;
    } else {
      //Opening company sub menu
      companyList.classList.remove("hidden");
      companyClicked = true;
    }
  }

  // Toggle the arrow icon when the tab is clicked.
  toggleArrowIcon(tab - 1);
});
