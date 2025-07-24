function topbar() {
  const container = document.createElement("section");
  container.classList =
    "sticky z-10 md:flex justify-center items-center gap-x-10 py-6 border-b border-solid border-white-alpha-20 sm:hidden md:block text-[14px] xl:justify-between px-4";

  const address = document.createElement("address");
  address.classList = "sm:hidden xl:inline-block flex items-center";
  const addressIcon = document.createElement("i");
  addressIcon.innerHTML = '<ion-icon name="location-outline"></ion-icon>';
  const addressText = document.createElement("span");
  addressText.innerText = "Restaurant St, Delicious City, London 9578, UK";
  addressText.classList = "not-italic";
  address.append(addressIcon, addressText);

  const separator1 = document.createElement("div");
  separator1.classList =
    "w-[8px] h-[8px] border border-solid border-gold-crayon transform rotate-45 sm:hidden xl:inline-block";

  const time = document.createElement("div");
  time.classList = "sm:hidden xl:inline-block xl:mr-auto flex items-center";
  const timeIcon = document.createElement("i");
  timeIcon.innerHTML = '<ion-icon name="time-outline"></ion-icon>';
  const timeText = document.createElement("span");
  timeText.innerText = "Daily : 8.00 am to 10.00 pm";
  time.append(timeIcon, timeText);

  const telLink = document.createElement("a");
  telLink.classList =
    "flex gap-x-1 hover:text-gold-crayon xl:ml-autoitems-center";
  telLink.href = "tel:+11234567890";
  const telIcon = document.createElement("i");
  telIcon.innerHTML = '<ion-icon name="call-outline"></ion-icon>';
  const telText = document.createElement("span");
  telText.innerText = "+1 123 456 7890";
  telLink.append(telIcon, telText);

  const separator2 = document.createElement("div");
  separator2.classList =
    "w-[8px] h-[8px] border border-solid border-gold-crayon transform rotate-45 sm:hidden xl:inline-block";

  const emailLink = document.createElement("a");
  emailLink.classList =
    "flex gap-x-1 hover:text-gold-crayon active:text-gold-crayon items-center";
  emailLink.href = "mailto:booking@restaurant.com";
  const emailIcon = document.createElement("i");
  emailIcon.innerHTML = '<ion-icon name="mail-outline"></ion-icon>';
  const emailText = document.createElement("span");
  emailText.innerText = "booking@restaurant.com";
  emailLink.append(emailIcon, emailText);

  container.append(address, separator1, time, telLink, separator2, emailLink);
  return container;
}

export { topbar as default };
