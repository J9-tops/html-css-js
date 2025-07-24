import "../styles/style.css";
import preload from "../preloader.js";
import header from "../header.js";
import topbar from "../topbar.js";

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

function homeBackground() {
  const section = document.createElement("section");
  section.classList =
    "max-h-screen w-full absolute top-0 overflow-hidden overscroll-none";

  const ul = document.createElement("ul");
  ul.classList = "max-h-full";

  const li1 = document.createElement("li");
  li1.classList =
    "max-h-full slider-item active opacity-0 invisible absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center align-center ";

  //CHILD 1
  const sliderBg1 = document.createElement("div");
  sliderBg1.classList =
    "min-h-full transform scale-[1.15] animate-backgroundImageScale pointer-events-none select-none overflow-hidden overscroll-none";
  const bgImg1 = document.createElement("img");
  bgImg1.src = backgroundImage1;
  bgImg1.height = 950;
  bgImg1.width = 1880;
  bgImg1.classList = "object-cover h-[950px] w-full";
  sliderBg1.append(bgImg1);

  const container1 = document.createElement("div");
  container1.classList =
    "absolute top-[35%] xl:top-[30%] mx-auto flex flex-col items-center text-center gap-y-6";

  //CHILD 2
  const subtitle1 = document.createElement("p");
  subtitle1.innerText = "Traditional & Hygine";
  subtitle1.classList = `text-gold-crayon uppercase relative font-bold animate-moveUp separator text-[1.4rem]`;

  //CHILD 3
  const headText1 = document.createElement("h1");
  headText1.innerHTML = "For the love of<br> delicious food";
  headText1.classList =
    "text-calc2 animate-moveUp animation-delay-200 leading-none font-Forum";

  //CHILD 4
  const bodyText1 = document.createElement("p");
  bodyText1.innerText = "Come with family & feel the joy of mouthwatering food";
  bodyText1.classList =
    "animate-moveUp animation-delay-500 leading-tight text-[1.6rem]";

  //CHILD 5
  const viewMenuBtn1 = document.createElement("a");
  const viewMenuBtnText1 = document.createElement("span");
  viewMenuBtnText1.innerText = "View Our Menu";
  viewMenuBtn1.classList =
    "border-2 border-gold-crayon text-gold-crayon bg-transparent p-4 uppercase tracking-widest mt-10 px-12 animate-moveUp animation-delay-700 text-[1.4rem]";
  viewMenuBtn1.append(viewMenuBtnText1);

  container1.append(subtitle1, headText1, bodyText1, viewMenuBtn1);

  for (let child of container1.children) {
    child.classList.add(
      "transition-transform",
      "transform",
      "duration-300",
      "ease-in",
    );
  }
  li1.append(sliderBg1, container1);

  //LIST CHILD 2
  const li2 = document.createElement("li");
  li2.classList =
    "min-h-screen slider-item opacity-0 invisible absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center align-center";

  const container2 = document.createElement("div");
  container2.classList =
    "absolute top-[35%] xl:top-[30%] mx-auto flex flex-col items-center text-center gap-y-6";

  //CHILD 1
  const sliderBg2 = document.createElement("div");
  sliderBg2.classList =
    "min-h-screen transform scale-[1.15] animate-backgroundImageScale pointer-events-none select-none";
  const bgImg2 = document.createElement("img");
  bgImg2.src = backgroundImage2;
  bgImg2.height = 950;
  bgImg2.width = 1880;
  bgImg2.classList = "object-cover h-[950px] w-full";
  sliderBg2.append(bgImg2);

  //CHILD 2
  const subtitle2 = document.createElement("p");
  subtitle2.innerText = "delightful experience";
  subtitle2.classList =
    "text-gold-crayon uppercase font-bold separator text-[1.4rem]";

  //CHILD 3
  const headText2 = document.createElement("h1");
  headText2.innerHTML = "Flavors Inspired by <br>the Seasons";
  headText2.classList = "text-calc2 leading-none";

  //CHILD 4
  const bodyText2 = document.createElement("p");
  bodyText2.innerText = "Come with family & feel the joy of mouthwatering food";
  bodyText2.classList = "leading-tight text-[1.6rem]";

  //CHILD 5
  const viewMenuBtn2 = document.createElement("a");
  const viewMenuBtnText2 = document.createElement("span");
  viewMenuBtnText2.innerText = "View Our Menu";
  viewMenuBtn2.classList =
    "border-2 border-gold-crayon text-gold-crayon bg-transparent p-4 uppercase tracking-widest mt-10 px-12 text-[1.4rem]";
  viewMenuBtn2.append(viewMenuBtnText2);

  container2.append(subtitle2, headText2, bodyText2, viewMenuBtn2);
  li2.append(sliderBg2, container2);

  //LIST CHILD 3
  const li3 = document.createElement("li");
  li3.classList =
    "min-h-screen slider-item opacity-0 invisible flex justify-center align-center";

  const container3 = document.createElement("div");
  container3.classList =
    "absolute top-[35%] xl:top-[30%] mx-auto flex flex-col items-center text-center gap-y-6";

  //CHILD 1
  const sliderBg3 = document.createElement("div");
  sliderBg3.classList =
    "min-h-screen transform scale-[1.15] animate-backgroundImageScale pointer-events-none select-none";
  const bgImg3 = document.createElement("img");
  bgImg3.src = backgroundImage3;
  bgImg3.height = 950;
  bgImg3.width = 1880;
  bgImg3.classList = "object-cover h-[950px] w-full";
  sliderBg3.append(bgImg3);

  //CHILD 2
  const subtitle3 = document.createElement("p");
  subtitle3.innerText = "amazing & delicious";
  subtitle3.classList =
    "text-gold-crayon uppercase font-bold separator text-[1.4rem]";

  //CHILD 3
  const headText3 = document.createElement("h1");
  headText3.innerHTML = "Where every flavor<br> tells a story";
  headText3.classList = "text-calc2 leading-none";

  //CHILD 4
  const bodyText3 = document.createElement("p");
  bodyText3.innerText = "Come with family & feel the joy of mouthwatering food";
  bodyText3.classList = "leading-tight text-[1.6rem]";

  //CHILD 5
  const viewMenuBtn3 = document.createElement("a");
  const viewMenuBtnText3 = document.createElement("span");
  viewMenuBtnText3.innerText = "View Our Menu";
  viewMenuBtn3.classList =
    "border-2 border-gold-crayon text-gold-crayon bg-transparent p-4 uppercase tracking-widest mt-10 px-12 text-[1.4rem]";
  viewMenuBtn3.append(viewMenuBtnText3);

  container3.append(subtitle3, headText3, bodyText3, viewMenuBtn3);
  li3.append(sliderBg3, container3);

  ul.append(li1, li2, li3);

  //SLIDE CHANGE BUTTON
  const nextSlideBtn = document.createElement("button");
  const nextSlideBtnIcon = document.createElement("span");
  nextSlideBtnIcon.innerHTML = '<ion-icon name="chevron-back"></ion-icon>';
  nextSlideBtnIcon.classList =
    "absolute top-[7px] left-0 bottom-0 right-0 transform -rotate-45";
  nextSlideBtn.classList =
    "absolute text-gold-crayon text-[2.4rem] top-1/2 left-[30px] border border-gold-crayon border-solid z-20 w-[45px] h-[45px] transform rotate-45";
  nextSlideBtn.append(nextSlideBtnIcon);

  const previousSlideBtn = document.createElement("button");
  const previousSlideBtnIcon = document.createElement("span");
  previousSlideBtnIcon.innerHTML =
    '<ion-icon name="chevron-forward"></ion-icon>';
  previousSlideBtnIcon.classList =
    "absolute top-[5px] left-0 bottom-0 right-[-10px] transform -rotate-45";
  previousSlideBtn.classList =
    "absolute text-gold-crayon text-[2.4rem] top-1/2 right-[30px] border border-gold-crayon border-solid z-20 w-[45px] h-[45px] transform rotate-45 ";
  previousSlideBtn.append(previousSlideBtnIcon);

  const bookTable = document.createElement("a");
  bookTable.classList =
    "absolute bottom-6 right-6 bg-gold-crayon text-black w-[70px] p-2 flex flex-col gap-y-[8px] items-center z-10 text-center cursor-pointer";
  const rotatingDiv = document.createElement("div");
  rotatingDiv.classList =
    "w-full h-full absolute top-0 border border-solid bg-transparent border-gold-crayon animate-rotatingDiv z-[-10]";
  bookTable.append(rotatingDiv);
  const bookTableImg = document.createElement("img");
  bookTableImg.src = bookTableLogo;
  bookTableImg.classList = "max-w-[30px]";

  const bookTableText = document.createElement("span");
  bookTableText.innerText = "BOOK A TABLE";
  bookTableText.classList = "text-[10px] leading-none";

  bookTable.append(bookTableImg, bookTableText);

  section.append(ul, nextSlideBtn, previousSlideBtn, bookTable);
  return { section, nextSlideBtn, previousSlideBtn };
}

const { section, nextSlideBtn, previousSlideBtn } = homeBackground();
main.append(section);

function backgroundSlider() {
  const sliderItems = document.querySelectorAll(".slider-item");

  let currentSlidePos = 0;
  let lastActiveSliderItem = sliderItems[0];
  for (let child of sliderItems) {
    if (child.classList.contains("active")) {
      child.classList.remove("opacity-0", "invisible");
      child.classList.add("opacity-1", "visible");
    }
  }

  const updateSliderPos = function () {
    // Remove active class from the last active slider
    lastActiveSliderItem.classList.remove("active");

    // Get the container of the last active slider
    const lastActiveContainer = lastActiveSliderItem.querySelector(".flex");
    lastActiveSliderItem.classList.add(
      "transition-opacity",
      "duration-700",
      "ease-in-out",
    );
    lastActiveSliderItem.classList.remove("opacity-1", "visible");
    lastActiveSliderItem.classList.add("opacity-0", "invisible");
    // Remove animation classes from the last active container, but only once
    Array.from(lastActiveContainer.children).forEach((child) => {
      if (child.classList.contains("animate-moveUp")) {
        child.classList.remove(
          "animate-moveUp",
          "animation-delay-200",
          "animation-delay-500",
          "animation-delay-700",
        );
      }
    });

    // Update the current slide
    sliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = sliderItems[currentSlidePos];
    lastActiveSliderItem.classList.add(
      "transition-opacity",
      "duration-700",
      "ease-in-out",
    );
    lastActiveSliderItem.classList.remove("opacity-0", "invisible");
    lastActiveSliderItem.classList.add("opacity-1", "visible");

    // Get the container of the new active slider
    const currentContainer = lastActiveSliderItem.querySelector(".flex");

    // Only add animation classes to each child of the current container to trigger animations
    Array.from(currentContainer.children).forEach((child, index) => {
      // Adding delays based on the child index to stagger animations
      if (!child.classList.contains("animate-moveUp")) {
        child.classList.add("animate-moveUp");
        if (index === 1) {
          child.classList.add("animation-delay-200");
        } else if (index === 2) {
          child.classList.add("animation-delay-500");
        } else if (index === 3) {
          child.classList.add("animation-delay-700");
        }
      }
    });
  };

  const slideNext = function () {
    if (currentSlidePos >= sliderItems.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    updateSliderPos();
  };
  function nextSlide() {
    sliderItems[currentSlidePos].classList.remove("opacity-1", "visible");
    sliderItems[currentSlidePos].classList.add("opacity-0", "invisible");
    slideNext();
    for (let child of sliderItems) {
      if (child.classList.contains("active")) {
        child.classList.remove("opacity-0", "invisible");
        child.classList.add("opacity-1", "visible");
      }
    }
  }
  // nextSlideBtn.addEventListener("click", nextSlide);

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = sliderItems.length - 1;
    } else {
      currentSlidePos--;
    }
    updateSliderPos();
  };
  function previousSlide() {
    sliderItems[currentSlidePos].classList.remove("opacity-1", "visible");
    sliderItems[currentSlidePos].classList.add("opacity-0", "invisible");
    slidePrev();
    for (let child of sliderItems) {
      if (child.classList.contains("active")) {
        child.classList.remove("opacity-0", "invisible");
        child.classList.add("opacity-1", "visible");
      }
    }
  }
  // previousSlideBtn.addEventListener("click", previousSlide);

  window.addEventListener("load", function () {
    setInterval(function () {
      nextSlide();
    }, 7000);
  });
  return { nextSlide, previousSlide };
}

const { nextSlide, previousSlide } = backgroundSlider();

nextSlideBtn.addEventListener("click", nextSlide);
previousSlideBtn.addEventListener("click", previousSlide);

("before:content-[''] absolute bottom-[100%] left-[50%] transform -translate-x-1/2 w-[200%] h-[200%] before:rounded-[50%] before:transition before:duration-500 before:ease z-1 before:z-[-1] hover:before:bottom-[-50%] focus:before:bottom-[-50%]");
("before:content-[''] before:absolute before:bottom-[100%] before:left-[50%] before:transform before:-translate-x-1/2 before:w-[200%] before:h-[200%] before:rounded-[50%] before:transition before:duration-500 before:ease z-1 before:z-[-1] hover:before:bottom-[-50%] focus:before:bottom-[-50%]");
