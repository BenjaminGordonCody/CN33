const removeBtn = document.getElementById("remove");

removeBtn.addEventListener("click", () => {
  let lastItem = document.querySelector("li:last-child");
  let list = document.getElementsByTagName("ul")[0];
  list.removeChild(lastItem);
});
