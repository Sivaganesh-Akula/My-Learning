var date = new Date();
document.body.innerHTML = "<h1> Today is " + date + "</h1>";

//Data types
var integer = 1234;
var string = "Chinna";
var bool = true;
var _null = null;
var  _undefined = undefined;
//symbol data is newly introduced

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
pens.reverse();

// Remove the first value of the array:
pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");

// Remove the last value of the array:
pens.pop();

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
pens.splice(pos, n) // Starts at the seccond item and removes two items.

console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var result = pens.indexOf(search, index);
console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
var arrayString = pens.join(separator);
console.log("String from array: ", arrayString);

//Functions
//Named functions
// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())

// BOM
window.innerWidth;
window.open()

// DOM
document.querySelector(".classname")
document.querySelector(".classname tag")
document.querySelector(".classname1 a, .classname2 tag")
document.querySelector(".class .innerClass tag")
document.querySelector(".classname a[href*='linkedin.com']")
// All the above are work for querySelectorAll
document.querySelectorAll("a")

document.querySelector(".className").innerHTML
document.querySelector(".className").outerHTML
document.querySelector("#idName").id
document.querySelector(".className")
document.querySelector(".className").className
document.querySelector(".className").classList //readonly

// For readonly some methods available
document.querySelector(".className").classList.add("newClass")
document.querySelector(".className").classList.remove("existedClass")
document.querySelector(".className").classList.toggle("removeClass") // removeClass set to false
document.querySelector(".className").classList.contains("containedClassForSameTag")

// Methods to select attributes of HTML
// hasAttribute gives boolean o/p
// getAttribute displays the attribute value if exists
// setAttribute sets the attribute for the tag
// removeAttribute removes the attribute
const TAGSELECTOR = document.querySelector(".className tag")

if(TAGSELECTOR.hasAttribute("target")) {     
    console.log(TAGSELECTOR.getAttribute("target"));
}
else {
    console.log(TAGSELECTOR.setAttribute("target", "_blank")); 
}

// Eg for methods createElement, createTextNode appendChild

// <figure class=".fearured-image">
//      <img href="url" alt="some text">
// </figure>

const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
// or
var text = "Text to include";

var captionElement = document.createElement(figcaption);

/*
var captionText = document.createTextNode(altText);
//or
var captionText = document.createTextNode(text);
//or
var captionText = document.createTextNode("Text to include");

captionElement.appendChild(captionText);
*/

/*
captionElement.append(altText); 
*/

FEATURED.appendChild(captionElement);

// Changing Inline CSS using JS

//to access the styles
document.querySelector(".className tag | .className | #id | etc.,").style
document.querySelector(".className tag").style.color = "blue";
document.querySelector(".className tag").style.backgroundColor = "green";
document.querySelector(".className tag").style.cssText = "color: white; padding: 24;"

// event handlers and listeners

const CLASSSELECTOR = document.querySelector(".fileName tag")

function reveal(e) {
    e.preventDefault();
}

// event handlers
CLASSSELECTOR.onclick = reveal;
CLASSSELECTOR.onclick = console.log("Sec event handler for the element");
// Only the second event handler works. we can't bind two event handlers for the same event

// event listeners
CLASSSELECTOR.addEventListener("click", reveal, false);
CLASSSELECTOR.addEventListener("click", function(){ console.log("The button was clicked"); }, false);
//Here two events will work perfectly

function reveal(e, current) {
    e.preventDefault();

    current.innerHTML == "insideText" ? CLASSSELECTOR.innerHTML = "change text" : CLASSSELECTOR.innerHTML = "insideText";
}

CLASSSELECTOR.addEventListener("click", function(e){ reveal(e,this); }, false);