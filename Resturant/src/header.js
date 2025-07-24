import logo from "./assets/images/logo.svg";
// import home from "./js/home.js";
// import menu from "./js/menu.js";
// import contact from "./js/contact.js";
// import about from "./js/about.js";

function headerContainer() {
  const header = document.createElement("header");
  header.classList = "bg-transparent sticky top-0 w-full z-50 overflow-hidden";
  const section = document.createElement("section");
  section.classList =
    "px-[16px] w-full flex justify-between items-center pt-[32px] gap-x-6 xl:gap-x-20 scroll-mt-[40px] xl:overflow-hidden";

  const resturantBrand = document.createElement("a");
  resturantBrand.classList = "cursor-pointer";
  const resturantBrandImg = document.createElement("img");
  resturantBrandImg.src = logo;
  resturantBrand.title = "Resturant Logo";
  resturantBrand.append(resturantBrandImg);

  const findATableBtn = document.createElement("a");
  findATableBtn.classList =
    "uppercase max-w-[max-content] cursor-pointer self-right px-[45px] py-[12px] bg-gold-crayon text-[1.2rem] text-black z-1 relative overflow-hidden hover:text-gold-crayon hover:bg-transparent hover:border-gold-crayon hover:border-2 hover:border-solid sm:hidden md:block md:ml-auto xl:ml-0 tracking-[3px]";
  findATableBtn.textContent = "find a table";

  const navBar = document.createElement("nav");
  navBar.id = "nav-bar";
  navBar.classList =
    "absolute top-0 md:top-[-3.2rem] left-[-120%] h-[100vh] backdrop-blur-sm bg-eerie-black-4 p-8 pt-8 flex flex-col gap-14 overflow-y-auto z-50 transition-left duration-300 ease-linear xl:bg-transparent xl:sticky xl:backdrop-filter-none xl:h-full xl:p-0 xl:ml-auto";

  //   CLOSE BUTTON INSIDE NAVBAR
  const closeBtn = document.createElement("button");
  closeBtn.id = "close-btn";
  closeBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  closeBtn.classList =
    "border border-solid rounded-[50%] border-quick-silver text-3xl w-[fit-content] p-1 ml-auto cursor-pointer xl:hidden";
  closeBtn.addEventListener("click", function () {
    navBar.classList.toggle("left-[0]");
  });
  navBar.append(closeBtn);

  //LOGO INSIDE NAVBAR
  const navLogo = document.createElement("a");
  const navLogoImg = document.createElement("img");
  navLogoImg.src = logo;
  navLogo.classList = "self-center xl:hidden cursor-pointer";
  navLogo.append(navLogoImg);
  navBar.append(navLogo);

  //   NAV-BAR-LINKS
  const linkNames = [
    {
      name: "Home",
      link: "#home",
      // src: home,
    },
    {
      name: "Menu",
      link: "#menu",
      // src: menu,
    },
    {
      name: "About Us",
      link: "#about-us",
      // src: about,
    },
    {
      name: "Contact",
      link: "#contact",
      // src: contact,
    },
  ];

  const linkListParent = document.createElement("ul");
  linkListParent.classList =
    " flex flex-col border-t border-solid border-gold-crayon xl:border-0 xl:flex-row xl:gap-x-20 xl:transform-none";

  for (const element of linkNames) {
    const linkList = document.createElement("li");
    const links = document.createElement("a");
    links.classList =
      "border-b border-solid border-gold-crayon flex gap-3 items-center py-6 uppercase hover:text-gold-crayon xl:border-0 xl:hover-underline xl:z-10 font-DMSans tracking-wide";
    links.addEventListener("click", function () {
      navBar.classList.toggle("left-[0]");
    });
    // links.addEventListener("click", element.src);
    links.href = `${element.link}`;

    const separator = document.createElement("div");
    separator.classList =
      "w-[8px] h-[8px] border border-solid border-gold-crayon transform rotate-45 xl:hidden";
    links.append(separator);

    const span = document.createElement("span");
    span.classList = "text-[16px] ";
    span.innerText = `${element.name}`;
    links.append(span);
    linkList.append(links);
    linkListParent.append(linkList);
  }
  navBar.append(linkListParent);

  //   CONTACT DIV
  const contactDiv = document.createElement("div");
  contactDiv.classList =
    "flex flex-col items-center gap-y-4 text-center mt-12 text-davys-grey xl:hidden text-xl";

  const visitUsText = document.createElement("p");
  visitUsText.innerText = "Visit Us";
  visitUsText.classList = "text-calc1 text-white";

  const address = document.createElement("p");
  address.innerText = "Restaurant St, Delicious City, London 9578, UK";
  address.classList = "mt-12";

  const timeText = document.createElement("p");
  timeText.innerText = "Open: 9.30 am - 2.30pm";

  const emailText = document.createElement("a");
  emailText.href = `mailto:booking@restaurant.com`;
  emailText.innerText = "booking@restaurant.com";

  const bookingText = document.createElement("p");

  bookingText.innerText = "Booking Request";
  bookingText.classList = "font-bold text-white";

  const telText = document.createElement("a");
  telText.href = "tel:+88123123456";
  telText.innerText = "+88-123-123456";
  telText.classList = "text-gold-crayon text-3xl hover-underline";

  contactDiv.append(
    visitUsText,
    address,
    timeText,
    emailText,
    bookingText,
    telText,
  );
  navBar.append(contactDiv);

  const hamburgerDiv = document.createElement("div");
  hamburgerDiv.id = "menu-btn";
  hamburgerDiv.classList = "z-2 cursor-pointer xl:hidden";
  const hamburgerLine1 = document.createElement("div");
  const hamburgerLine2 = document.createElement("div");
  const hamburgerLine3 = document.createElement("div");
  hamburgerLine1.classList = "menuBtnClass";
  hamburgerLine2.classList = "menuBtnClass delay-150";
  hamburgerLine3.classList = "menuBtnClass delay-300";
  hamburgerDiv.append(hamburgerLine1, hamburgerLine2, hamburgerLine3);
  hamburgerDiv.addEventListener("click", function () {
    navBar.classList.toggle("left-[0]");
  });

  section.append(resturantBrand, navBar, findATableBtn, hamburgerDiv);

  header.append(section);
  return header;
}

export { headerContainer as default };
