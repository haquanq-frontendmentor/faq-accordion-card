## Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p>
  <a href="https://www.frontendmentor.io/solutions/accessible-accordion-mobile-first-pixel-perfect-w-html-and-css-and-js-X0B_gYNCdI">
    <img
      alt="Solution post"
      src="https://img.shields.io/badge/Frontendmentor-blue?label=Solution%20on"
    /></a>
  <a href="https://haquanq-frontendmentor.github.io/faq-accordion-card/">
    <img
      alt="Live demo"
      src="https://img.shields.io/badge/Demo-teal?label=Live"
    /></a>
  <a href="./LICENSE"
    ><img
      allt="MIT License"
      src="https://img.shields.io/badge/MIT-blue?label=license"
  /></a>
</p>

## Table of contents

- [Project overview](#sunrise-project-overview)
- [Development workflow](#stars-development-workflow)
- [Working in this repository](#astronaut-working-in-this-repository)

## :sunrise: Project overview

### Challenge requirements

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Todo

Features

- [x] Accordion component
  - [x] Accessible to screen readers
  - [x] Expand/collapse when users click on title (has smooth animation)

Accessibility

- [x] Page is responsive to different screen sizes
- [x] Interactive eleemnts have clear focus indicator

### Preview

![](./docs/design/desktop-design.jpg)

## :stars: Development workflow

### Approach

Site built with mobile-first workflow to prioritize mobile devices, made accessible using [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/).

### Tools

- **HTML + CSS:** vanilla CSS for styling.
- **JavaScript:** for site interactivity.
- **Browsersync:** live development server (sync files changes).

### Deployment

- Deployed on github page using Github Actions (manually triggered).

## :astronaut: Working in this repository

### Presequisites

Having these tools installed:

- Git (prefer lastest LTS version)
- NodeJS (prefer latest LTS version)

### Clone this project to your machine

Open new terminal, run the following command:

```
git clone https://github.com/haquanq-frontendmentor/social-links-profile.git
```

Then, run `npm install` to install all dependencies.

```
npm install
```

### Development workflow

In terminal, run `npm run dev` to start development server:

```
npm run dev
```
