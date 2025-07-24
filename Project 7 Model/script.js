const responseBlockContainer = document.querySelector(".response-block-container");
const body = document.body;
const model = document.querySelector(".model");

model.addEventListener("click", function () {
  responseBlockContainer.style.display = "block";
  body.style.backgroundColor = "#ffffff1a";
});
