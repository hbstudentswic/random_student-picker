const form = document.querySelector("form");
const p = document.querySelector("p");
const students = [];

/* copied from MDN */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

/* "submit" is on the form NOT on a submit button; submit goes with a form */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  /*
      1. event.target is the form that got submitted
      2. FormData uses values and name attributes from the form. INPUTS HAVE TO HAVE NAME ATTRIBUTES.
      3. Create a new object from the entries in the form.
      */
  const newStudent = Object.fromEntries(new FormData(event.target));
  /*
  LONGER VERSION OF LINE 19
  const newStudent = {};
  newStudent.fname = event.target.elements[0].value;
  newStudent.lname = event.target.elements[0].value;
  */

  console.log(newStudent);

  students.push(newStudent);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  console.log(students[getRandomIntInclusive(0, students.length - 1)]);

  // Get a random student object in the `students` array
  const randomName = students[getRandomIntInclusive(0, students.length - 1)];

  // Log the first and last name of the student using template literals
  p.innerText = `${randomName.fname} ${randomName.lname}`;
});
/* This half controls the button that increases the medium gap in our custom propery, :root from our css. */
const root = document.querySelector(":root");

document.querySelector("#test").addEventListener("click", () => {
  root.style.setProperty("--medium-gap", "100px");
});
