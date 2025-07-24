//PRELOADER FUNCTION
function preload() {
  const preloadDiv = document.createElement("div");
  preloadDiv.id = "preloader";
  preloadDiv.classList =
    "preload fixed inset-0 bg-gold-crayon z-50 grid place-content-center justify-items-center duration-500 ease-in gap-5";

  const circle = document.createElement("div");
  const grilliText = document.createElement("p");
  grilliText.textContent = "Grilli";
  preloadDiv.append(circle);
  circle.insertAdjacentElement("afterend", grilliText);

  grilliText.classList =
    "webkit--extend text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-extrabold leading-[1em] uppercase tracking-[16px] ps-8 bg-clip-text animate-loadingText";

  circle.classList =
    "w-[112px] h-[112px] rounded-full border-8 border-solid border-white animate-spin border-t-smoky-black-3";
  return preloadDiv;
}

export { preload as default };
