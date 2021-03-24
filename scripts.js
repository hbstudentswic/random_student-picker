/**
 * TODO: 1. Grab the form and assign it to a variable
 * 2. Attach a "submit" event with a callback function.
 */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello submit");
});
