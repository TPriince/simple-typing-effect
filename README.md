# SimpleTypingEffect NPM Package Documentation

`simple-typing-effect` is an npm package that provides a function for creating a typewriter effect on a web page. It simulates the appearance of typing and deleting text, creating a dynamic and engaging user experience.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Parameters](#parameters)
4. [Example](#example)
5. [Credits](#credits)

## Installation

You can install `simple-typing-effect` via npm by running the following command:

```shell
npm install simple-typing-effect
```

## Usage

To use simple-typing-effect, you need to import the package and call the typingEffect function with the required parameters.

```javascript
import typingEffect from "simple-typing-effect";

const arrayOfWords = ["Hello", "World", "simple-typing-effect", "npm package"];
const wrapperId = "typing-wrapper"; // id of the wrapper element in your HTML

// Customize options if needed (optional)
const options = {
  textColor: "blue",
  cursorColor: "white",
  width: "2px",
  height: "2rem",
};

// Customize typing and deleting speeds (optional)
const forwardSlashSpeed = 118;
const backwardSlashSpeed = 65;

// Call the typingEffect function with the provided parameters
typingEffect(
  arrayOfWords,
  wrapperId,
  options,
  forwardSlashSpeed,
  backwardSlashSpeed
);
```

## Parameters

The typingEffect function accepts the following parameters:

- arrayOfWords (array): An array of words to be typed out.
- wrapperId (string): The ID of the HTML element that will contain the typewriter effect.
- options (object, optional): An object that specifies additional options for the typewriter effect. It can have the following properties:
- textColor (string, default: "blue"): The color of the typed text.
- cursorColor (string, default: "white"): The color of the typing cursor.
- width (string, default: "2px"): The width of the typing cursor.
- height (string, default: "2rem"): The height of the typing cursor.
- forwardSlashSpeed (number, default: 118): The speed of typing forward slash characters (in milliseconds).
- backwardSlashSpeed (number, default: 65): The speed of typing backward slash characters (in milliseconds).

## Example

Here's an example of how to use typingEffect:

```javascript
import typingEffect from "simple-typing-effect";

const arrayOfWords = [
  "Welcome",
  "to",
  "the",
  "simple-typing-effect",
  "npm package",
];
const wrapperId = "typing-wrapper"; // id of the wrapper element in your HTML

// Customize options (optional)
const options = {
  textColor: "purple",
  cursorColor: "red",
  width: "3px",
  height: "1.5rem",
};

// Customize typing and deleting speeds (optional)
const forwardSlashSpeed = 150;
const backwardSlashSpeed = 80;

// Call the typingEffect function with the provided parameters
typingEffect(
  arrayOfWords,
  wrapperId,
  options,
  forwardSlashSpeed,
  backwardSlashSpeed
);
```

In this example, the typing effect will render the array of words one after the other with a purple text color and a red typing cursor. The cursor will have a width of 3 pixels and a height of 1.5 rem. The typing speed for adding characters will be 150 milliseconds, and the deleting speed will be 80 milliseconds.

## Credits

This NPM package was developed by Tobiloba Odukoya.
