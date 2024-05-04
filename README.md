# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview
I used this project as a recap for data manipulation including fetching api. This project was done in 12h

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.png)

### Links

- URL: [https://williamlafortunecaissy.github.io/restcountryapi/](https://williamlafortunecaissy.github.io/restcountryapi/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Sass
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This project helped me properly understanding a mix of various crash cources to handle data
Here are some key items that i am proud of:

- the way the dark theme is handled, updating only 4 variables when toggling from 1 theme to another. all colors are handled by these var.
```css
.app--light {
    --background: var(--light-gray);
    --component: var(--white);
    --text: var(--dark-blue-text);
    --input: var(--dark-gray);
}
.app--dark {
    --background: var(--dark-blue-bg);
    --component: var(--dark-blue-el);
    --text: var(--white);
    --input: var(--white);
}
```

- I made my component with static data first, so when I first fetched the actual data, I updated the data structure to fit my app rather than updating my components.
Exemple: heres an example on when im listing the languages, I was expecting an array, the api returns an object. heres a rough helper function that I made to restructure everything into an array that i was expecting
```js
// transform an object into an array of the given property (or the actual value)
function getArray(object, prop = null) {
  let array = []
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      // get prop of the object || get the value
      const value = prop ? object[key][prop] : object[key];
      array = [...array, value]
    }
  }
  return array
}
...
{
  ...
  currencies: getArray(fetchedData[key].currencies, 'name'),
  languages: getArray(fetchedData[key].languages),
  ...
}
```

## Author

- Website - [William Lafortune-Caissy](https://williamlafortunecaissy.github.io/)

