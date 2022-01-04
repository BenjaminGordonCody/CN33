const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  heading.style.color = input.value;
});
