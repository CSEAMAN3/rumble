"use strict";

// teaching number 1 - confirm strictly

let answer1 = confirm("Are you ready to rumble?");

if (answer1 === true) {
  console.log("Let's Get Ready To Rumble");
} else {
  console.log("oh, Well then");
}

// teaching number 2 - logical operators

let first = false;
let second = false;
let third = false;

if (first && second) {
  console.log("first and third were both true");
} else if (first || second) {
  console.log("first or second was true!");
} else if (third) {
  console.log("first and second were false but third was true!");
} else {
  console.log("were any of my variables true?");
}

let color = prompt("What is your favourite colour?");

switch (color.toLowerCase()) {
  case "red":
    console.log("Your fav color is red!");
    break;
  case "blue":
    console.log("Your fav color is blue!");
    break;
  default:
    console.log("your fav color is not acceptable");
    break;
}
