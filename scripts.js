const form = document.querySelector("form");
const students = [];

function getRandomInt(min, max) {
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
  console.log("hello");
});
