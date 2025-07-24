const signUpBtn = document.querySelector("#sign-up-btn");
const [signInContainerA, signInContainerB] = document.querySelectorAll(".sign-in-container");
const [signUpContainerA, signUpContainerB] = document.querySelectorAll(".sign-up-container");

signUpBtn.addEventListener("click", function () {
  // Toggling the inactive and active states
  signInContainerA.classList.toggle("inactive");
  signInContainerB.classList.toggle("inactive");
  signInContainerB.classList.toggle("active");
  signUpContainerA.classList.toggle("inactive");
  signUpContainerB.classList.toggle("inactive");
  signUpContainerB.classList.toggle("active");
});

document.querySelector("#sign-in-btn").addEventListener("click", () => {
  signInContainerA.classList.toggle("inactive");
  signInContainerB.classList.toggle("active");
  signInContainerB.classList.toggle("inactive");
  signUpContainerA.classList.toggle("inactive");
  signUpContainerB.classList.toggle("active");
  signUpContainerB.classList.toggle("inactive");
});
