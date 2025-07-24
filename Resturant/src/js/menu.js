//MENU IMPORTS
import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import badge1 from "../assets/images/badge-1.png";
import special1 from "../assets/images/special-dish-banner.jpg";

import shape1 from "../assets/images/shape-1.png";
import shape2 from "../assets/images/shape-2.png";
import shape3 from "../assets/images/shape-5.png";
import shape4 from "../assets/images/shape-6.png";

import menu1 from "../assets/images/menu-1.png";
import menu2 from "../assets/images/menu-2.png";
import menu3 from "../assets/images/menu-3.png";
import menu4 from "../assets/images/menu-4.png";
import menu5 from "../assets/images/menu-5.png";
import menu6 from "../assets/images/menu-6.png";

function sectionService() {
  const serviceSection = document.createElement("section");
  serviceSection.classList = "flex justify-center";
  const serviceDivContainer = document.createElement("div");
  serviceDivContainer.classList =
    "flex flex-col items-center px-4 md:w-[420px] lg:w-full mt-20";

  const serviceSubtitle = document.createElement("p");
  serviceSubtitle.innerText = "Flavors For Royalty";
  serviceSubtitle.classList =
    "text-gold-crayon uppercase separator text-[1.3rem] tracking-[0.4em] font-DMSans";
  const serviceHeading = document.createElement("h2");
  serviceHeading.innerText = "We Offer Top Notch";
  serviceHeading.classList =
    "font-Forum font-medium leading-[1.2em] text-calc1";

  const serviceSectionText = document.createElement("p");
  serviceSectionText.innerHTML =
    "Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry lorem Ipsum has been<br>the industry's standard dummy text ever.";
  serviceSectionText.classList =
    "mb-[40px] mt-[16px] text-[1.6rem] leading-loose text-center";

  const serviceUl = document.createElement("ul");
  serviceUl.classList =
    "w-full grid gap-y-[100px] items-center lg:grid-cols-2 lg:gap-x-[40px] xl:grid-cols-3";

  //LIST 1
  const serviceLi1 = document.createElement("li");
  serviceLi1.classList = "flex flex-col items-center w-full";
  const serviceCard1 = document.createElement("div");
  serviceCard1.classList = "w-full";
  const figure1 = document.createElement("figure");
  figure1.classList = "w-full mb-20";
  const figureImg1 = document.createElement("img");
  figureImg1.src = service1;
  figureImg1.setAttribute("alt", "Breakfast");
  figureImg1.setAttribute("loading", "lazy");
  figureImg1.classList = "w-full";
  figure1.append(figureImg1);
  serviceCard1.append(figure1);
  const cardContent1 = document.createElement("div");
  cardContent1.classList = "flex flex-col text-center";
  const cardTitle1 = document.createElement("span");
  cardTitle1.innerText = "Breakfast";
  cardTitle1.classList = "text-calc3 text-Forum";
  const viewMenuBtn1 = document.createElement("a");
  viewMenuBtn1.innerText = "View Menu";
  viewMenuBtn1.classList =
    "text-gold-crayon uppercase tracking-widest mt-4 text-[1.4rem]";
  cardContent1.append(cardTitle1, viewMenuBtn1);
  serviceLi1.append(serviceCard1, cardContent1);

  //LIST 2
  const serviceLi2 = document.createElement("li");
  serviceLi2.classList = "flex flex-col items-center w-full";
  const serviceCard2 = document.createElement("div");
  serviceCard2.classList = "w-full";
  const figure2 = document.createElement("figure");
  figure2.classList = "w-full mb-20";
  const figureImg2 = document.createElement("img");
  figureImg2.src = service2;
  figureImg2.setAttribute("alt", "Appetizers");
  figureImg2.setAttribute("loading", "lazy");
  figureImg2.classList = "w-full";
  figure2.append(figureImg2);
  serviceCard2.append(figure2);
  const cardContent2 = document.createElement("div");
  cardContent2.classList = "flex flex-col text-center";
  const cardTitle2 = document.createElement("span");
  cardTitle2.innerText = "Appetizers";
  cardTitle2.classList = "text-calc3 text-Forum";
  const viewMenuBtn2 = document.createElement("a");
  viewMenuBtn2.innerText = "View Menu";
  viewMenuBtn2.classList =
    "text-gold-crayon uppercase tracking-widest mt-4 text-[1.4rem]";
  cardContent2.append(cardTitle2, viewMenuBtn2);
  serviceLi2.append(serviceCard2, cardContent2);

  //LIST 3
  const serviceLi3 = document.createElement("li");
  serviceLi3.classList =
    "flex flex-col items-center w-full lg:transform lg:translate-x-1/2 xl:transform-none";
  const serviceCard3 = document.createElement("div");
  serviceCard3.classList = "w-full";
  const figure3 = document.createElement("figure");
  figure3.classList = "w-full mb-20";
  const figureImg3 = document.createElement("img");
  figureImg3.src = service3;
  figureImg3.setAttribute("loading", "lazy");
  figure3.setAttribute("alt", "Drinks");
  figureImg3.classList = "w-full";
  figure3.append(figureImg3);
  serviceCard3.append(figure3);
  const cardContent3 = document.createElement("div");
  cardContent3.classList = "flex flex-col text-center";
  const cardTitle3 = document.createElement("span");
  cardTitle3.innerText = "Drinks";
  cardTitle3.classList = "text-calc3 text-Forum";
  const viewMenuBtn3 = document.createElement("a");
  viewMenuBtn3.innerText = "View Menu";
  viewMenuBtn3.classList =
    "text-gold-crayon uppercase tracking-widest mt-4 text-[1.4rem]";
  cardContent3.append(cardTitle3, viewMenuBtn3);
  serviceLi3.append(serviceCard3, cardContent3);

  serviceUl.append(serviceLi1, serviceLi2, serviceLi3);

  const shapeImg1 = document.createElement("img");
  shapeImg1.src = shape1;
  shapeImg1.setAttribute("alt", "shape");
  shapeImg1.setAttribute("loading", "lazy");
  shapeImg1.classList = "sm:hidden";

  const shapeImg2 = document.createElement("img");
  shapeImg2.src = shape2;
  shapeImg2.setAttribute("alt", "shape");
  shapeImg2.setAttribute("loading", "lazy");
  shapeImg2.classList = "sm:hidden";

  serviceDivContainer.append(
    serviceSubtitle,
    serviceHeading,
    serviceSectionText,
    serviceUl,
    shapeImg1,
    shapeImg2,
  );
  serviceSection.append(serviceDivContainer);
  return serviceSection;
}

function specials() {
  const section = document.createElement("section");
  section.classList = "mt-[80px] flex flex-col items-center xl:flex-row";

  const specialDiv1 = document.createElement("div");
  specialDiv1.classList = "w-full";
  const specialImg1 = document.createElement("img");
  specialImg1.classList = "w-full";
  specialImg1.src = special1;
  specialImg1.setAttribute("alt", "special dish");
  specialDiv1.append(specialImg1);

  const specialsContainer1 = document.createElement("div");
  specialsContainer1.classList =
    "flex flex-col items-center text-center gap-y-6 px-4 relative";

  const badgeDiv1 = document.createElement("div");
  const badgeImg1 = document.createElement("img");
  badgeImg1.src = badge1;
  badgeImg1.setAttribute("loading", "lazy");
  badgeImg1.setAttribute("alt", "special dish");
  badgeImg1.classList =
    "w-[28] h-[41] mt-[80px] xl:absolute xl:top-0 xl:left-12 animate-bouncing";
  badgeDiv1.append(badgeImg1);

  const specialsSubtitle = document.createElement("p");
  specialsSubtitle.innerText = "Special Dish";
  specialsSubtitle.classList =
    "text-gold-crayon uppercase text-[1.3rem] tracking-[0.4em] font-DMSans separator";

  const specialsHeading = document.createElement("h2");
  specialsHeading.innerText = "Lobster Tortellini";
  specialsHeading.classList = "text-calc1 xl:w-3/4 xl:text-left";

  const specialsText = document.createElement("p");
  specialsText.innerText =
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type.";
  specialsText.classList = "text-[1.6rem] xl:w-3/4 xl:text-left";

  //PRICES
  const priceDiv = document.createElement("div");
  priceDiv.classList = "text-[2.3rem] flex gap-x-10 items-center xl:w-3/4";
  const oldPrice = document.createElement("del");
  oldPrice.innerText = "$40.00";
  oldPrice.classList = "text-[1.8rem] text-davys-grey";
  const newPrice = document.createElement("span");
  newPrice.innerText = "$20.00";
  newPrice.classList = "text-gold-crayon ";
  priceDiv.append(oldPrice, newPrice);

  const viewAllMenuBtn = document.createElement("a");
  viewAllMenuBtn.innerText = "View All Menu";
  viewAllMenuBtn.classList =
    "border-2 border-gold-crayon text-black bg-gold-crayon p-4 uppercase tracking-widest mt-10 px-12 text-[1.4rem] xl:ml-[-280px] mb-40";

  specialsContainer1.append(
    badgeDiv1,
    specialsSubtitle,
    specialsHeading,
    specialsText,
    priceDiv,
    viewAllMenuBtn,
  );

  //SHAPES
  const shapeImg3 = document.createElement("img");
  shapeImg3.src = shape3;
  shapeImg3.setAttribute("alt", "shape");
  shapeImg3.setAttribute("loading", "lazy");
  shapeImg3.classList = "sm:hidden";

  const shapeImg4 = document.createElement("img");
  shapeImg4.src = shape4;
  shapeImg4.setAttribute("alt", "shape");
  shapeImg4.setAttribute("loading", "lazy");
  shapeImg4.classList = "sm:hidden";

  section.append(specialDiv1, specialsContainer1, shapeImg3, shapeImg4);
  return section;
}

//--------------------------------------------------------

function menuContent() {
  const section = document.createElement("section");
  section.classList = "bg-eerie-black-3 relative overflow-hidden";
  const container = document.createElement("div");
  container.classList = "flex flex-col px-8 py-[70px] relative z-50";
  const subtitle = document.createElement("p");
  subtitle.innerText = "Special Selection";
  subtitle.classList =
    "text-gold-crayon font-medium uppercase tracking-[0.4em] mb-[12px] separator text-center text-[1.2rem]";
  const headline = document.createElement("h2");
  headline.innerText = "Delicious Menu";
  headline.classList =
    "font-Forum leading-[1.2em] text-calc1 mb-[40px] text-center";
  const ul = document.createElement("ul");
  ul.classList = "grid gap-[40px] mb-[50px] md:grid-cols-2";

  //LIST 1
  const list1 = document.createElement("li");
  const menuCard1 = document.createElement("div");
  menuCard1.classList = "flex align-start gap-[20px]";
  const figure1 = document.createElement("figure");
  figure1.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img1 = document.createElement("img");
  img1.src = menu1;
  img1.setAttribute("alt", "Greek Salad");
  img1.setAttribute("loading", "lazy");
  img1.classList = "w-[100px] h-[100px]";
  figure1.append(img1);
  const textDiv1 = document.createElement("div");
  const titleWrapper1 = document.createElement("div");
  titleWrapper1.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center ";
  const title1 = document.createElement("h3");
  title1.innerText = "Greek Salad";
  title1.classList = "text-[2.1rem] ";
  const label1 = document.createElement("span");
  label1.innerText = "Seasonal";
  label1.classList =
    "bg-gold-crayon text-eerie-black-1 mt-[10px] md:mt-0 font-Forum max-w-[max-content] leading-[1.4em] uppercase px-[10px] text-[1.5rem] ";
  const price1 = document.createElement("span");
  price1.innerText = "$25.50";
  price1.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b ";
  titleWrapper1.append(title1, label1, price1);

  const cardText1 = document.createElement("p");
  cardText1.innerText =
    "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.";
  cardText1.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv1.append(titleWrapper1, cardText1);
  menuCard1.append(figure1, textDiv1);
  list1.append(menuCard1);

  //LIST 2
  const list2 = document.createElement("li");
  const menuCard2 = document.createElement("div");
  menuCard2.classList = "flex align-start gap-[20px]";
  const figure2 = document.createElement("figure");
  figure2.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img2 = document.createElement("img");
  img2.src = menu2;
  img2.setAttribute("alt", "Lasagne");
  img2.setAttribute("loading", "lazy");
  img2.classList = "w-[100px] h-[100px]";
  figure2.append(img2);
  const textDiv2 = document.createElement("div");
  const titleWrapper2 = document.createElement("div");
  titleWrapper2.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center";
  const title2 = document.createElement("h3");
  title2.innerText = "Lasagne";
  title2.classList = "text-[2.1rem]";

  const price2 = document.createElement("span");
  price2.innerText = "$40.00";
  price2.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b";
  titleWrapper2.append(title2, price2);

  const cardText2 = document.createElement("p");
  cardText2.innerText =
    "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices";
  cardText2.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv2.append(titleWrapper2, cardText2);
  menuCard2.append(figure2, textDiv2);
  list2.append(menuCard2);

  //LIST 3
  const list3 = document.createElement("li");
  const menuCard3 = document.createElement("div");
  menuCard3.classList = "flex align-start gap-[20px]";
  const figure3 = document.createElement("figure");
  figure3.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img3 = document.createElement("img");
  img3.src = menu3;
  img3.setAttribute("alt", "Butternut Pumpkin");
  img3.setAttribute("loading", "lazy");
  img3.classList = "w-[100px] h-[100px]";
  figure3.append(img3);
  const textDiv3 = document.createElement("div");
  const titleWrapper3 = document.createElement("div");
  titleWrapper3.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center";
  const title3 = document.createElement("h3");
  title3.innerText = "Butternut Pumpkin";
  title3.classList = "text-[2.1rem]";

  const price3 = document.createElement("span");
  price3.innerText = "$10.00";
  price3.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b";
  titleWrapper3.append(title3, price3);

  const cardText3 = document.createElement("p");
  cardText3.innerText =
    "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.";
  cardText3.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv3.append(titleWrapper3, cardText3);
  menuCard3.append(figure3, textDiv3);
  list3.append(menuCard3);

  //LIST 4
  const list4 = document.createElement("li");
  const menuCard4 = document.createElement("div");
  menuCard4.classList = "flex align-start gap-[20px]";
  const figure4 = document.createElement("figure");
  figure4.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img4 = document.createElement("img");
  img4.src = menu4;
  img4.setAttribute("alt", "Tokusen Wagyu");
  img4.setAttribute("loading", "lazy");
  img4.classList = "w-[100px] h-[100px]";
  figure4.append(img4);
  const textDiv4 = document.createElement("div");
  const titleWrapper4 = document.createElement("div");
  titleWrapper4.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center";
  const title4 = document.createElement("h3");
  title4.innerText = "Tokusen Wagyu";
  title4.classList = "text-[2.1rem]";
  const label4 = document.createElement("span");
  label4.innerText = "New";
  label4.classList =
    "bg-gold-crayon text-eerie-black-1 font-Forum max-w-[max-content] leading-[1.4em] uppercase mt-[10px] px-[10px] text-[1.5rem] md:mt-0";
  const price4 = document.createElement("span");
  price4.innerText = "$39.00";
  price4.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b";
  titleWrapper4.append(title4, label4, price4);

  const cardText4 = document.createElement("p");
  cardText4.innerText =
    "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.";
  cardText4.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv4.append(titleWrapper4, cardText4);
  menuCard4.append(figure4, textDiv4);
  list4.append(menuCard4);

  //LIST 5
  const list5 = document.createElement("li");
  const menuCard5 = document.createElement("div");
  menuCard5.classList = "flex align-start gap-[20px]";
  const figure5 = document.createElement("figure");
  figure5.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img5 = document.createElement("img");
  img5.src = menu5;
  img5.setAttribute("alt", "Olivas Rellenas");
  img5.setAttribute("loading", "lazy");
  img5.classList = "w-[100px] h-[100px]";
  figure5.append(img5);
  const textDiv5 = document.createElement("div");
  const titleWrapper5 = document.createElement("div");
  titleWrapper5.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center";
  const title5 = document.createElement("h3");
  title5.innerText = "Olivas Rellenas";
  title5.classList = "text-[2.1rem]";

  const price5 = document.createElement("span");
  price5.innerText = "$25.00";
  price5.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b";
  titleWrapper5.append(title5, price5);

  const cardText5 = document.createElement("p");
  cardText5.innerText =
    "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.";
  cardText5.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv5.append(titleWrapper5, cardText5);
  menuCard5.append(figure5, textDiv5);
  list5.append(menuCard5);

  //LIST 6
  const list6 = document.createElement("li");
  const menuCard6 = document.createElement("div");
  menuCard6.classList = "flex align-start gap-[20px]";
  const figure6 = document.createElement("figure");
  figure6.classList = "flex-shrink-0 rounded-[24px] img-holder";
  const img6 = document.createElement("img");
  img6.src = menu6;
  img6.setAttribute("alt", "Opu Fish");
  img6.setAttribute("loading", "lazy");
  img6.classList = "w-[100px] h-[100px]";
  figure6.append(img6);
  const textDiv6 = document.createElement("div");
  const titleWrapper6 = document.createElement("div");
  titleWrapper6.classList =
    "flex flex-col md:flex-row md:gap-x-[15px] md:items-center";
  const title6 = document.createElement("h3");
  title6.innerText = "Opu Fish";
  title6.classList = "text-[2.1rem]";

  const price6 = document.createElement("span");
  price6.innerText = "$49.00";
  price6.classList =
    "text-gold-crayon my-[10px] text-4xl md:my-0 md:flex md:items-center md:relative flex-grow  md:before:content-[''] md:before:h-[6px] md:before:flex-grow md:before:mr-4 md:before:border-t md:before:border-white-alpha-20 md:before:border-solid md:before:border-b";
  titleWrapper6.append(title6, price6);

  const cardText6 = document.createElement("p");
  cardText6.innerText =
    "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.";
  cardText6.classList = "text-quick-silver leading-[1.4em] text-2xl";
  textDiv6.append(titleWrapper6, cardText6);
  menuCard6.append(figure6, textDiv6);
  list6.append(menuCard6);

  ul.append(list1, list2, list3, list4, list5, list6);

  const menuText = document.createElement("p");
  menuText.innerHTML =
    'During winter daily from <span class="text-gold-crayon">7:00 pm</span> to <span class="text-gold-crayon">9:00 pm</span>';
  menuText.classList = "text-2xl text-center mb-[30px]";

  const viewMenuBtn = document.createElement("a");
  const viewMenuBtnText = document.createElement("span");
  viewMenuBtnText.innerText = "View All Menu";
  viewMenuBtnText.classList =
    "transition duration-250 ease hover:transform hover:translate-y-[-40px] focus:transform focus:translate-y-[-40px] ";
  viewMenuBtn.append(viewMenuBtnText);
  viewMenuBtn.classList =
    "text-gold-crayon text-[2.1rem] font-bold uppercase leading-[3px] border-2 border-solid border-gold-crayon py-[25px] text-center px-[45px] mb-[40px] w-[fit-content] self-center";

  container.append(subtitle, headline, ul, menuText, viewMenuBtn);

  const shapeImg3 = document.createElement("img");
  shapeImg3.src = shape3;
  shapeImg3.setAttribute("loading", "lazy");
  shapeImg3.classList = "w-3/4 absolute top-0 animate-bouncing z-10";

  const shapeImg4 = document.createElement("img");
  shapeImg4.src = shape4;
  shapeImg4.setAttribute("loading", "lazy");
  shapeImg4.classList = "w-3/4 absolute bottom-0 right-0 animate-bouncing z-10";

  section.append(container, shapeImg3, shapeImg4);
  return section;
}

function menuContainer() {
  //SWITCHING TO MENU PAGE
  const main = document.querySelector("main");
  const service = sectionService();
  const specialFunc = specials();
  const menuCont = menuContent();
  if (main.hasChildNodes) {
    main.replaceChildren();
    main.append(service, specialFunc, menuCont);
  }
}

export { menuContainer as default };
