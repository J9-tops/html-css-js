import "../styles/style.css";
import preload from "../preloader.js";
import header from "../header.js";
import topbar from "../topbar.js";
// import menu from "./menu.js";

import backgroundImage1 from "../assets/images/hero-slider-1.jpg";
import backgroundImage2 from "../assets/images/hero-slider-2.jpg";
import backgroundImage3 from "../assets/images/hero-slider-3.jpg";
import bookTableLogo from "../assets/images/hero-icon.png";

const html = document.querySelector("html");
html.classList = "scroll-smooth relative text-[10px]";

//PRE-LOADING EFFECT - - - - - - - -- - -- - -- - - - -- -- -  - -- - - - -- -- --  - - -- -- -- -- -- - - -- - -- --- -- -
window.addEventListener("DOMContentLoaded", function () {
  // Append the preloader to the body immediately when DOM is ready
  const preloadDiv = preload();
  document.body.appendChild(preloadDiv);

  // Ensure the body doesn't scroll during preload
  document.body.classList.add("text-white", "overflow-hidden");
});

window.addEventListener("load", function () {
  // Once the page has fully loaded, trigger preloader fade-out and removal
  const preloadDiv = document.querySelector(".preload");

  // Fade-out and translate animation
  preloadDiv.classList.add("opacity-0", "-translate-x-full", "duration-500");

  // After animation duration, remove the preloader and allow scrolling
  setTimeout(() => {
    preloadDiv.remove(); // Remove the preloader from the DOM
    document.body.classList.remove("overflow-hidden");
  }, 500); // Matches the duration-500 class (500ms transition)
});
//PRE-LOADING EFFECT  END - - - - - - - -- - -- - -- - - - -- -- -  - -- - - - -- -- --  - - -- -- -- -- -- - - -- - -- --- -

function topBar() {
  const topbarContainer = topbar();
  document.body.append(topbarContainer);
}
topBar();

function createHeader() {
  const head = header();
  document.body.append(head);
}

createHeader();

const main = document.createElement("main");
main.classList = "max-h-screen w-full overflow-x-hidden";
document.body.append(main);

function contactContainer() {
  const section = document.createElement("section");
  const divContainer = document.createElement("div");
  const reservationDiv = document.createElement("div");
  const form = document.createElement("form");

  const headline = document.createElement("h2");
  headline.innerText = "Online Reservation";
  headline.classList = "text-calc1 text-Forum text-center";

  const formText = document.createElement("p");
  formText.innerHTML =
    "Booking request <a href='tel:+88123123456'>+88-123-123456</a> or fill out the order form";
  formText.classList = "text-2xl text-center";

  const inputWrapper1 = document.createElement("div");
  inputWrapper1.classList = "grid lg:grid-cols-2 lg:gap-x-[20px]";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Your Name";
  nameInput.autocomplete = "off";

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneInput.placeholder = "Phone Number";
  phoneInput.autocomplete = "off";

  inputWrapper1.append(nameInput, phoneInput);

  const inputWrapper2 = document.createElement("div");
  inputWrapper2.classList = "grid grid-cols-1";
  const persons = document.createElement("div");
  const personIcon = document.createElement("i");
  personIcon.innerHTML = '<ion-icon name="person-outline"></ion-icon>';

  const personSelect = document.createElement("select");
  personSelect.name = "persons";

  const personArray = [
    "1 Person",
    "2 Persons",
    "3 Persons",
    "4 Persons",
    "5 Persons",
    "6 Persons",
    "7 Persons",
  ];

  personArray.map((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    personSelect.append(option);
    personSelect.value = personArray[0];
  });

  let dropIcon1 = document.createElement("i");
  dropIcon1.innerHTML =
    '<ion-icon name="chevron-down" aria-hidden="true"></ion-icon>';
  persons.append(personIcon, personSelect, dropIcon1);

  const date = document.createElement("div");

  const dateIcon = document.createElement("i");
  dateIcon.innerHTML =
    '<ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>';

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "reservation-date";

  date.append(dateIcon, dateInput);

  const time = document.createElement("div");
  const timeIcon = document.createElement("i");
  timeIcon.innerHTML =
    '<ion-icon name="time-outline" aria-hidden="true"></ion-icon>';

  const timeSelect = document.createElement("select");
  personSelect.name = "persons";

  const timeArray = [
    "08 : 00 am",
    "09 : 00 am",
    "10 : 00 am",
    "11 : 00 am",
    "12 : 00 pm",
    "01 : 00 pm",
    "02 : 00 pm",
    "03 : 00 pm",
    "04 : 00 pm",
    "05 : 00 pm",
    "06 : 00 pm",
    "07 : 00 pm",
    "08 : 00 pm",
    "09 : 00 pm",
    "10 : 00 pm",
  ];

  timeArray.map((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    timeSelect.append(option);
    timeSelect.value = timeArray[0];
  });

  let dropIcon2 = document.createElement("i");
  dropIcon2.innerHTML =
    '<ion-icon name="chevron-down" aria-hidden="true"></ion-icon>';

  time.append(timeIcon, timeSelect, dropIcon2);

  inputWrapper2.append(persons, date, time);

  const textArea = document.createElement("textarea");
  textArea.name = "message";
  textArea.placeholder = "Message";
  textArea.autocomplete = "off";

  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Book A Table";

  form.append(headline, formText, inputWrapper1, inputWrapper2, textArea);

  const contactTextDiv = document.createElement("div");
  const headline2 = document.createElement("h2");
  headline2.innerText = "Contact Us";

  const contactLabel = document.createElement("p");
  contactLabel.innerText = "Booking Request";

  const tel = document.createElement("a");
  tel.innerText = "+88-123-123456";
  tel.href = "tel:+88123123456";

  const separator = document.createElement("div");

  const location = document.createElement("p");
  location.innerText = "Location";

  const address = document.createElement("address");
  address.innerHTML = "Restaurant St, Delicious City, <br /> London 9578, UK";

  const lunchText = document.createElement("p");
  lunchText.innerText = "Lunch Time";

  const lunchTime = document.createElement("p");
  lunchTime.innerHTML = "Monday to Sunday <br /> 11.00 am - 2.30pm";

  const dinnerText = document.createElement("p");
  dinnerText.innerText = "Dinner Time";

  const dinnerTime = document.createElement("p");
  dinnerTime.innerHTML = "Monday to Sunday <br /> 05.00 am - 10.00pm";

  contactTextDiv.append(
    headline2,
    contactLabel,
    tel,
    separator,
    location,
    address,
    lunchText,
    lunchTime,
    dinnerText,
    dinnerTime,
  );

  reservationDiv.append(form, contactTextDiv);
  divContainer.append(reservationDiv);
  section.append(divContainer);
  main.append(section);
}

contactContainer();
