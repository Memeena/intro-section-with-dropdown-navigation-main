'use strict';

const arrowUp = document.querySelectorAll('.icon-angle-up');
const arrowDown = document.querySelectorAll('.icon-angle-down');
const featuresList = document.querySelector('.header__features__list');
const companyList = document.querySelector('.header__company__list');

const showDropDown = function (i) {
    console.log('Showing dropdown');
    arrowDown[i].classList.toggle('invisible');
    arrowUp[i].classList.toggle('invisible');
}

const hideDropDown = function (i) {
    console.log('Hiding dropdown');
    
    arrowDown[i].classList.toggle('invisible');
    arrowUp[i].classList.toggle('invisible');
}

console.log(arrowUp);
const chkTab = function (i) {
    i === 0 ? featuresList.classList.toggle('invisible') :
        companyList.classList.toggle('invisible');
}
arrowUp.forEach((icon,i) => {
icon.addEventListener('click', function () {
    chkTab(i);
    showDropDown(i);
});
// arrowDown.addEventListener('click', hideDropDown);    
})

arrowDown.forEach((icon, i) => {
    icon.addEventListener('click', function () {
        chkTab(i);
        hideDropDown(i);
   }) 
});

