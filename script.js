'use strict';

const arrowUp = document.querySelectorAll('.icon-angle-up');
const arrowDown = document.querySelectorAll('.icon-angle-down');
const featuresList = document.querySelector('.header__features__list');

const showDropDown = function () {
    console.log('Showing dropdown');
    arrowUp.style.transition = "all 2s";
    featuresList.classList.toggle('invisible');
    arrowDown.classList.toggle('invisible');
    arrowUp.classList.toggle('invisible');
}

const hideDropDown = function () {
    console.log('Hiding dropdown');
    featuresList.classList.toggle('invisible');
    arrowDown.classList.toggle('invisible');
    arrowUp.classList.toggle('invisible');
}


arrowUp.addEventListener('click', function () {
    console.log('arrow clicked');
    showDropDown();
});
arrowDown.addEventListener('click', hideDropDown);