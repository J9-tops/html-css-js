const sections = document.querySelectorAll(".book");

// Define the intersection observer options
let options = {
  threshold: 0.6, // When 60% of the section is in view
};

// Function to handle background color changes
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check which section is intersecting and change the background color
      if (entry.target.classList.contains("book-8")) {
        document.body.style.backgroundColor = "#f6e0a4";
      } else if (entry.target.classList.contains("book-7")) {
        document.body.style.backgroundColor = "#ff608c";
      } else if (entry.target.classList.contains("book-6")) {
        document.body.style.backgroundColor = "#ffffff";
      } else if (entry.target.classList.contains("book-5")) {
        document.body.style.backgroundColor = "#00c2b6";
      } else if (entry.target.classList.contains("book-4")) {
        document.body.style.backgroundColor = "#ff651a";
      } else if (entry.target.classList.contains("book-3")) {
        document.body.style.backgroundColor = "#ffbe00";
      } else if (entry.target.classList.contains("book-2")) {
        document.body.style.backgroundColor = "#1d3fbb";
      } else if (entry.target.classList.contains("book-1")) {
        document.body.style.backgroundColor = "#e30512";
      }
    }
  });
}, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
