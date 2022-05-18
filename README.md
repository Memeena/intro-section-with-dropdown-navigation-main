# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Screenshots/Desktop-menu-collapsed-screenshot.png)
![](./Screenshots/Desktop-menu-expanded-screenshot.png)
![](./Screenshots/Mobile-menu-collapsed-screenshot.png)
![](./Screenshots/Mobile-menu-expanded-screenshot.png)

### Links

- Solution URL: [Solution URL here](https://github.com/Memeena/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Live site URL here](https://memeena.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

This challenge taught me the following:

- Min,max and clamp.
  The fontsize and padding have been given the values by giving the min of two values by using min function or by using the clamp function where it specifies the min,max and middle values.

- While using the grid, min-content and max-content is used.

  - min-content is used for header-logo
  - max-content is used for the layout in feature sub-menu.

- In Javascript,
  - usage of 'data atrributes' for mobile menu (data-visible) and to specify which tab is clicked (data-item - For the feature sub-menu, data-item value as 1 and company sub-menu data-item value as 2).
  - usage of 'closest' to get the nearest attribute where the data-item is specified.

### Continued development

### Useful resources

- [Kevin Powell navbar tutorial](https://www.youtube.com/watch?v=HbBMp6yUXO0) - This helped me to know how to handle navbar with the hamburger icon.
- [Kevin Powell min/max and clamp](https://www.youtube.com/watch?v=U9VF-4euyRo) - This helped me to learn about min,max and clamp in CSS.

## Author

- Frontend Mentor - [@Memeena](https://www.frontendmentor.io/profile/Memeena)
- Twitter - [@Mekrish18](https://www.twitter.com/Mekrish18)
