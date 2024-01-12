/**
 * JavaScript DOM Manipulation.
 * What is DOM in JavaScript?
 * How it works?
 * Why do we need it?
 *
 * We will learn:
 * How to change the content of HTML elements
 * How to change the style (CSS) of HTML elements
 * How to react to HTML DOM events
 * How to add and delete HTML elements
 */
/**
 * Document Object Model (DOM)
 * Use to manipulate Content, style and structure of web page.
 * DOM Tree.
 * When a web page is loaded, the browser creates a Document Object Model of the page.
 * The HTML DOM model is constructed as a tree of Objects:
 */

/**
 * inorder to select an particular element from DOM tree
 * We have several ways to do this, we use five major ways to achieve this.
 *
 * getElementById()
 * getElementByClassName()
 * getElementByTagName()
 * querySelector()
 * querySelectorAll()
 *
 */

// Finding HTML Element by Id
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);
mainHeading.style.color = "green";
