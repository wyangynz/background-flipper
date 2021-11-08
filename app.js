const button = document.getElementById("change-bg-button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  console.log(document.body);
  document.body.style.background = "red";
});
