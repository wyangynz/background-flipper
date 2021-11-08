const button = document.getElementById("change-bg-button");
const colorText = document.querySelector(".color-text");

button.addEventListener("click", function () {
  const randomHexCode = getRandomHexCode();
  console.log(randomHexCode);
  document.body.style.background = randomHexCode;
  colorText.textContent = randomHexCode;
});

const getRandomHexCode = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
