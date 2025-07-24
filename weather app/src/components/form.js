import "../style.css";
import searchButtonImg from "../assets/search-button.svg";
import { fetchData } from "./location.js";

// HOME PAGE UI

const form = document.createElement("form");
form.id = "location-form";
const searchDiv = document.createElement("div");
searchDiv.classList = "search-container";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search for a city, state or country...";

const error = document.createElement("p");
error.classList = "error";

const Location = {
  name: "",
  scale: "metric",
  days: [],
};

const searchBtn = document.createElement("button");
const searchImg = document.createElement("img");
searchImg.src = searchButtonImg;
searchImg.title = "search-image";
searchImg.classList = "search-button";
searchBtn.append(searchImg);
searchBtn.type = "submit";
searchBtn.title = "Search";

searchDiv.append(searchInput, searchBtn);

const zeroOpacityBtn = document.createElement("button");
zeroOpacityBtn.style.display = "none";
zeroOpacityBtn.setAttribute("form", "location-form");
zeroOpacityBtn.title = "temp-change-button";
document.body.append(zeroOpacityBtn);
const tempScaleContainer = document.createElement("div");
tempScaleContainer.classList = "temp-container";
let clicked = false;
let debounceTimeout;
const tempScaleLabel = document.createElement("label");
tempScaleLabel.addEventListener("click", function (e) {
  if (debounceTimeout) return;

  debounceTimeout = setTimeout(() => {
    debounceTimeout = null;
    if (clicked) {
      Location.scale = "metric";
      clicked = false;
      zeroOpacityBtn.click();
    } else {
      Location.scale = "us";
      clicked = true;
      zeroOpacityBtn.click();
    }
  }, 300);
});

tempScaleLabel.setAttribute("for", "toggle");
const tempScaleInput = document.createElement("input");
tempScaleInput.type = "checkbox";
tempScaleInput.name = "toggle-input";
tempScaleInput.id = "toggle";
const tempScaleDiv = document.createElement("div");
tempScaleDiv.classList = "toggle-switch";
tempScaleLabel.append(tempScaleInput, tempScaleDiv);
tempScaleContainer.append(tempScaleLabel);

form.append(searchDiv, error, tempScaleContainer);
form.addEventListener("submit", function (event) {
  if (searchInput.value === "" || searchInput.value === null) {
    event.preventDefault();
    error.innerText = "Please type in a valid location";
  } else {
    Location.name = searchInput.value;
    error.innerText = "";
    event.preventDefault();
    fetchData();
    const removeContent = document.querySelector(".content");
    console.log(removeContent);
    if (removeContent !== null) {
      document.body.removeChild(removeContent);
    }
  }
});

function renderForm() {
  document.body.append(form);
}

export { Location, form };
