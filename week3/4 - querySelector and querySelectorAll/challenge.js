const colours = ["red", "yellow", "goldenrod", "lightgreen", "blue", "purple"];
const listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = colours[i];
}
