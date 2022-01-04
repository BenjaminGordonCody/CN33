const listItems = document.getElementsByTagName("li");

for (let listItem of listItems) {
  listItem.addEventListener("mouseover", () => {
    listItem.textContent = listItem.textContent.toUpperCase();
  });
  listItem.addEventListener("mouseout", () => {
    listItem.textContent = listItem.textContent.toLowerCase();
  });
}
