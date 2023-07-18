# QuickBlocksUI by TwoHandStudio

## Description 
This package contains a set of custom React components that can be used to build modern and responsive user interfaces. The package includes a range of UI elements, such as buttons, forms, alerts, modals, and more, that are easy to integrate into any React project. Each component is designed to be highly customizable and reusable, with extensive documentation and examples to help developers get started quickly. With this package, you can save time and effort in building UI components from scratch, and focus on creating the core features of your application.

[![npm version](https://img.shields.io/npm/v/@twohandstudio/quickblocksui.svg)](https://www.npmjs.com/package/@twohandstudio/quickblocksui)
[![npm downloads](https://img.shields.io/npm/dt/@twohandstudio/quickblocksui.svg)](https://www.npmjs.com/package/@twohandstudio/quickblocksui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub contributors](https://img.shields.io/github/contributors/TwoHandStudio/QuickBlocksUI.svg)](https://github.com/TwoHandStudio/QuickBlocksUI/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/TwoHandStudio/QuickBlocksUI.svg?style=social&label=Star&maxAge=2592000)](https://github.com/TwoHandStudio/QuickBlocksUI/stargazers)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@twohandstudio/quickblocksui.svg)](https://www.npmjs.com/package/@twohandstudio/quickblocksui)
[![Last commit](https://img.shields.io/github/last-commit/TwoHandStudio/QuickBlocksUI.svg)](https://github.com/TwoHandStudio/QuickBlocksUI/commits/master)
[![Issues](https://img.shields.io/github/issues-raw/TwoHandStudio/QuickBlocksUI.svg)](https://github.com/TwoHandStudio/QuickBlocksUI/issues)
[![Closed issues](https://img.shields.io/github/issues-closed-raw/TwoHandStudio/QuickBlocksUI.svg)](https://github.com/TwoHandStudio/QuickBlocksUI/issues?q=is%3Aissue+is%3Aclosed)



## Installation

```sh
npm i @two-hand-studio/quickblockui
```


## Contents

- [Parallax](#parallax)
- [Default Slider](#default-slider)
- [Slider](#slider)

---

# Parallax

This component will work for uniform images divided into several planes. Specifically, it is created to evoke the impression of depth. Should be used on full width of page as a background. It will usually require styling, as it's mostly about showing the component working in react rather than putting a ready-made style to the component. A basic style is created to make it work properly.

### For the component to work properly:

- import like any Component:

```javascript
import { Parallax } from "@twohandstudio/quickblocksui";
```

- import images (or just pass it straight to table)

```javascript
 import B1 from './image1.png';
 .
 import B4 from './image4.png';
```

- create one state with your images and depth you want (for example):

```javascript
const [images, setImages] = useState([
  [B4, 0.05],
  [B3, 0.1],
  [B2, 0.2],
  [B1, 0.25],
]);
```

- pass it to Component:

```javascript
<Parallax images={images} />
```

### Additional instructions

- It is required to manually divide the image into several parts (necessarily save as PNG), import them as B4, B3 etc.
- Optionally, you can add a background image and several objects.
- You can change the depth value for each image which will change the speed at which it moves.
- Images are first imported and then added to the image state with depth, which gives you the ability to dynamically change them.

Below is a picture showing an example of a mountain landscape divided into 4 elements:

![image](https://user-images.githubusercontent.com/82551359/228567429-f993ca49-9709-436e-b665-6ea5d559dd2b.png)

# Default Slider

A simple slider that changes the photo every 20 seconds. Slider can be dynamically changed by the user to any slide by clicking on the button. You can add many photos, buttons to change will be created automatically.
You can also add fields such as title or description to the [sliderList](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L5) table and place them somewhere on the page, similarly to [photos in a slider](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L53).

### For the component to work properly:

- import like any Component:

```javascript
import { Slider } from "@twohandstudio/quickblocksui";
```

- create one variable or state (for example):

```javascript
const sliderList = [
  {
    id: 0,
    img: "https://picsum.photos/1920/1080?random=1",
  },
  {
    id: 1,
    img: "https://picsum.photos/1920/1080?random=2",
  },
];
```

- pass it to Component:

```javascript
<Slider sliderList={sliderList} />
```

- also you can now change slide display time by adding (example for 20 sec):

```javascript
<Slider sliderList={sliderList} animDuration={20} />
```

### Additional instructions

- It is required to style the elements, because the base style I created may not work in some projects. it all depends on where you will be using it and what your project requires.
- If you change [slide display time](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L37), don't forget to change the **_aniamtion-duration_** value in the [animate](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/styl.css#L40) class to the time you want the slide to last.

# Slider
### Description
Offers the same functionality as the [Default Slider](#default-slider) but with added compatibility and the ability to easily customize its styles. With smooth sliding and seamless value selection, this slider enhances the user experience while seamlessly integrating into any project.

## All possible methods of customization and styling changes 
https://quickblocks.gatsbyjs.io/Examples/Slider/
