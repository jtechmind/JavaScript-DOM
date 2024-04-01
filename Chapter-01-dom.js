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

// find an element by id
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// get all the elements which uses same class 'list-items' in our case
const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

// select All ul in page, and return HTMLCollection()[]
const listTag = document.getElementsByTagName("ul");
console.log(listTag);

// it will select the first element, which you are givent to querySelector() method
// in case of class use . dot before class name. querySelector(".className")
// in case of id use # hash before id name. querySelector("#id")
const divElement = document.querySelector("div");
console.log(divElement);

// It Will select all the elements, and return us NodeLists
// In this case we are looking for 'div' element
const allDivElement = document.querySelectorAll("div");
console.log(allDivElement);

function domAction() {
  mainHeading.style.color = "green";
}

document.querySelector("#bookButton").addEventListener("click", (event) => {
  document.querySelector("#books-main-heading").style.color = "red";
});
