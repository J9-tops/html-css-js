document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".fa-bars").addEventListener("click", function () {
    this.classList.toggle("fa-times");
    document.querySelector(".navbar").classList.toggle("nav-toggle");
  });
});
let show = false;
document.querySelectorAll(".separate-text").forEach((question) =>
  question.addEventListener("click", function () {
    if (!show) {
      this.nextElementSibling.style.display = "block";
      show = true;
    } else {
      this.nextElementSibling.style.display = "none";
      show = false;
      //   console.group("working");
    }
    // console.log();
    // console.log("working");
  })
);
