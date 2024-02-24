const cssRoot = document.querySelector(":root");
const changeButton = document.getElementById("change");
const colorSelector = document.getElementById("color-selector");
const settings = document.querySelector(".setting-button");
const settingBar = document.querySelector(".secondary-nav");
const usernameSet = document.querySelector(".username-set");

const accentColors = {
  yellow: ["#FCE38A", "#F38181"],
  red: ["#F54EA2", "#FF7676"],
  blue: ["#17EAD9", "#6078EA"],
  grape: ["#622774", "#C53364"],
  purple: ["#7117EA", "#EA6060"],
  emrald: ["#42E695", "#3BB2B8"],
  violet: ["#F02FC2", "#6094EA"],
  black: ["#65799B", "#5E2563"],
  green: ["#184E68", "#57CA85"],
  marine: ["#5B247A", "#1BCEDF"],
};

function changeColor() {
  cssRoot.style.setProperty("--accent1", accentColors[colorSelector.value][0]);
  cssRoot.style.setProperty("--accent2", accentColors[colorSelector.value][1]);
  changeButton.style.display = "none";
}

changeButton.addEventListener("click", changeColor);

colorSelector.addEventListener("change", () => {
  changeButton.style.display = "block";
});

settings.addEventListener("click", () => {
  settingBar.style.display == "block"
    ? (settingBar.style.display = "none")
    : (settingBar.style.display = "block");
});
