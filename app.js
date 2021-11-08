const colorArray = [
  "thistle",
  "cornflowerblue",
  "mintcream",
  "mistyrose",
  "honeydew",
  "peachpuff",
  "papayawhip",
  "antiquewhite",
  "lavender",
  "tomato",
  "lightcoral",
];
const button = document.getElementById("change-bg-button");
const colorText = document.querySelector(".color-text");

button.addEventListener("click", function () {
  //   const randomNumber = getRandomNumber();
  //   console.log(randomNumber);
  //   console.log(colorArray[randomNumber]);
  //   document.body.style.background = colorArray[randomNumber];
  //   colorText.textContent = colorArray[randomNumber];
  const randomHexCode = getRandomHexCode();
  console.log(randomHexCode);
  document.body.style.background = randomHexCode;
  colorText.textContent = randomHexCode;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colorArray.length);
};

const getRandomHexCode = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
