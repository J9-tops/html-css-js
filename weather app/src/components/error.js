const errorDiv = document.createElement("div");
errorDiv.classList = "error-container";

const oops = document.createElement("p");
oops.innerText = "Oop! Something went wrong ...";

const failedAction = document.createElement("h3");
failedAction.innerText = "Failed to fetch";

const retryBtn = document.createElement("button");
retryBtn.type = "submit";
retryBtn.setAttribute("form", "location-form");
retryBtn.innerText = "Try Again";

errorDiv.append(oops, failedAction, retryBtn);

export { errorDiv };
