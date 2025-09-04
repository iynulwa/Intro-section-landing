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
- [Author](#author)

## Overview
Creating a landing page using react. This landing page features two drop down menu that are interacted with differently based on the screen size.

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](/images/Screenshot 2025-09-04 053429.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/iynulwa/Intro-section-landing)
- Live Site URL: [Add live site URL here](https://intro-section-landing-iota.vercel.app/)

## My process
Started by noting back all features that will need to be implemented and what tools to use. Then created a vite react app with the necessary dependencies. Created the needed components and styled them. Afterwards, functionality was then added and responsivesness was checked for.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I took some time to understand conditional rendering of components using the tenary operator and passing functions as props.

```react 
{isOpen && <Menu onCloseClick={handleClick} />}
```

## Author
- Frontend Mentor - [@iynulwa](https://www.frontendmentor.io/profile/iynulwa)
- Twitter - [@iynulwa](https://www.twitter.com/iynulwa)