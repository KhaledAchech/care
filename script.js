const heart = document.getElementById("heart");

const messages = ["You is", "Kind", "Smart", "Beautiful"];
let index = 0;

heart.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  heart.textContent = messages[index];
});
