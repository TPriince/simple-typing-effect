# simple-typing-effect Package Documentation

# simple-typing-effect

`simple-typing-effect` is an npm package that provides a function for creating a typewriter effect on a web page.

## Installation

You can install `simple-typingE-effect` via npm by running the following command:

```shell
npm install simple-typing-effect
```

```javascript
function typingEffect(
  arrayOfWords,
  wrapperId,
  options = {
    textColor: "blue",
    cursorColor: "white",
    width: "2px",
    height: "2rem",
  },
  forwardSlashSpeed = 118,
  backwardSlashSpeed = 65
) {...}
```

## Parameters

- arrayOfWords (array): An array containing the words to be displayed with the typing effect.
- wrapperId (string): The id of the HTML element that will contain the typing effect.
- options (object, optional): An object that configures the appearance of the typing effect. It can have the following properties:
  - textColor (string, default: "blue"): The color of the text.
  - cursorColor (string, default: "white"): The color of the cursor.
  - width (string, default: "2px"): The width of the cursor.
  - height (string, default: "2rem"): The height of the cursor.
- forwardSlashSpeed (number, default: 118): The speed at which the text is revealed (in milliseconds) when typing forward.
- backwardSlashSpeed (number, default: 65): The speed at which the text is deleted (in milliseconds) when typing backward.

## Usage

To use simple-typing-effect, you need to import the package and call the typingEffect function with the required parameters.

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
const typingEffect = require("typing-effect");

typingEffect(
  ["Hello", "World", "This is the", "simple-typing-effect", "package"],
  "wrapper",
  {
    textColor: "blue",
    cursorColor: "white",
    width: "2px",
    height: "2rem",
  },
  118,
  65
);
```

In this example, the words "Hello", "World", "This is the", "simple-typing-effect" and "package" will be typed out in the HTML element with the ID 'wrapper', using the specified options and speeds.
