const colorArray = ["thistle", "cornflowerblue", "mintgreen", "mistyrose"];
const button = document.getElementById("change-bg-button");
const colorText = document.querySelector(".color-text");

button.addEventListener("click", function () {
  //   console.log(document.body);
  // const randomNumber = getRandomNumber();
  const randomNumber = 0;
  document.body.style.background = colorArray[randomNumber];
  colorText.textContent = colorArray[randomNumber];
});

const getRandomNumber = () => {
  return Math.random();
};
