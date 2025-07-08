const button = document.querySelector(".finger-gym__button");
const counter = document.getElementById("click-count");


const soundFiles = [
  "assets/sounds/comeon.mp3",
  "assets/sounds/letsgo.mp3",
  "assets/sounds/yeah.mp3",
  "assets/sounds/yeah2.mp3"
];

function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0]; 
}

const savedData = JSON.parse(localStorage.getItem("fingerGymData")) || {
  date: getToday(),
  count: 0
};

if (savedData.date !== getToday()) {
  savedData.count = 0;
  savedData.date = getToday();
}

let clicks = savedData.count;
counter.textContent = clicks;

button.addEventListener("click", () => {
  clicks++;
  counter.textContent = clicks;

  localStorage.setItem(
    "fingerGymData",
    JSON.stringify({ date: getToday(), count: clicks })
  );

  const sound = new Audio(soundFiles[Math.floor(Math.random() * soundFiles.length)]);
  sound.volume = 0.4;
  sound.play();

  showPlusOne();
});

function showPlusOne() {
  const plusOne = document.createElement("span");
  plusOne.textContent = "+1";
  plusOne.classList.add("plus-one");

  plusOne.style.left = Math.random() * 90 + "%";
  plusOne.style.top = Math.random() * 90 + "%";

  document.body.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 1000);
}

const hydrateButton = document.querySelector(".finger-gym__hydrate-button");
const drinkSound = new Audio("assets/sounds/drink.mp3");

hydrateButton.addEventListener("click", () => {
  drinkSound.currentTime = 0; 
  drinkSound.play();
});
