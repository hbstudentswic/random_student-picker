const form = document.querySelector("form");
const p = document.querySelector("p");
const students = [];

/* copied from MDN */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

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
