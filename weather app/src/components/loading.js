import image from "../assets/clear-day.svg";

const loadingDiv = document.createElement("div");
loadingDiv.classList = "loading-container";

const loadingImage = document.createElement("img");
loadingImage.src = image;

const text = document.createElement("p");
text.innerText = "Loading ...";

loadingDiv.append(loadingImage, text);

export { loadingDiv };
