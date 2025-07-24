import partialCloudImg from "../assets/partly-cloudy-day.svg";
import rainImg from "../assets/rain-day.svg";

function renderElements(
  name,
  thisDay,
  currentTemp,
  tempDescription,
  humidValue,
  windValue,
  highestTemp,
  sunriseValue,
  sunsetValue,
  scale
) {
  const content = document.createElement("div");
  content.classList = "content";

  const locationNameDiv = document.createElement("div");
  locationNameDiv.classList = "location-name";

  const locationName = document.createElement("h1");
  locationName.innerText = name;
  const time = document.createElement("p");
  time.id = "time-now";
  const timer = new Date();
  const hour = document.createElement("span");
  const colon1 = document.createElement("span");
  const minute = document.createElement("span");
  const colon2 = document.createElement("span");
  const seconds = document.createElement("span");
  colon1.innerText = ":";
  colon2.innerText = ":";

  hour.innerText = timer.getHours();
  minute.innerText = timer.getMinutes();
  seconds.innerText = timer.getSeconds();
  time.append(hour, colon1, minute, colon2, seconds);
  setInterval(() => {
    let currentTime = new Date();
    hour.innerText = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minute.innerText = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.innerText = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  }, 1000);

  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth();
  // const day = today.getDate();
  const todayDate = document.createElement("p");
  todayDate.id = "today-date";
  // todayDate.innerText = `${year}-${month}-${day}`;
  todayDate.innerText = `${thisDay}`;
  locationNameDiv.append(locationName, time, todayDate);

  let unit = "C";
  if (scale === "us") {
    unit = "F";
  }

  const weatherNow = document.createElement("div");
  weatherNow.classList = "weather-now";
  const weatherNowImg = document.createElement("img");
  weatherNowImg.src = partialCloudImg;
  const textDiv = document.createElement("div");
  const tempNow = document.createElement("p");
  tempNow.id = "temperature-now";
  tempNow.innerText = `${currentTemp}º${unit}`;
  const tempNowDescription = document.createElement("p");
  tempNowDescription.id = "temperature-description";
  tempNowDescription.innerText = tempDescription;
  textDiv.append(tempNow, tempNowDescription);
  weatherNow.append(weatherNowImg, textDiv);

  const moreAboutWeather = document.createElement("div");
  moreAboutWeather.classList = "about-weather";

  const humidityNow = document.createElement("div");
  humidityNow.classList = "humidity-now";
  const humidityText = document.createElement("p");
  humidityText.innerText = "Humidity";
  const humidValueDiv = document.createElement("div");

  const humidityNowImg = document.createElement("img");
  humidityNowImg.src = rainImg;
  const humidNow = document.createElement("p");
  humidNow.innerText = `${humidValue}%`;
  humidValueDiv.append(humidityNowImg, humidNow);

  humidityNow.append(humidityText, humidValueDiv);

  const windSpeedNow = document.createElement("div");
  windSpeedNow.classList = "windSpeed-now";
  const windSpeedText = document.createElement("p");
  windSpeedText.innerText = "Wind Speed";
  const windDiv = document.createElement("div");
  const windSpeedNowImg = document.createElement("img");
  windSpeedNowImg.src = rainImg;
  const speedNow = document.createElement("p");
  speedNow.innerText = `${windValue} kph`;
  windDiv.append(windSpeedNowImg, speedNow);
  windSpeedNow.append(windSpeedText, windDiv);

  const highestTempNow = document.createElement("div");
  highestTempNow.classList = "highestTemp-now";
  const highestTempText = document.createElement("p");
  highestTempText.innerText = "Highest Temperature";

  const highTempDiv = document.createElement("div");
  const highestTempNowImg = document.createElement("img");
  highestTempNowImg.src = rainImg;
  const highTempNow = document.createElement("p");
  highTempNow.innerText = `${highestTemp} º${unit}`;
  highTempDiv.append(highestTempNowImg, highTempNow);
  highestTempNow.append(highestTempText, highTempDiv);

  moreAboutWeather.append(humidityNow, windSpeedNow, highestTempNow);

  const sunDiv = document.createElement("div");
  sunDiv.classList = "rise-set-container";
  const sunriseDiv = document.createElement("div");
  sunriseDiv.classList = "sunrise-container";
  const riseHeader = document.createElement("h1");
  riseHeader.innerText = "Sunrise";
  const riseDataDiv = document.createElement("div");
  const sunriseImg = document.createElement("img");
  sunriseImg.src = rainImg;
  const sunriseTime = document.createElement("p");
  sunriseTime.innerText = sunriseValue;
  riseDataDiv.append(sunriseImg, sunriseTime);
  sunriseDiv.append(riseHeader, riseDataDiv);

  const sunsetDiv = document.createElement("div");
  sunsetDiv.classList = "sunset-container";
  const setDataDiv = document.createElement("div");
  const setHeader = document.createElement("h1");
  setHeader.innerText = "Sunset";
  const sunsetImg = document.createElement("img");
  sunsetImg.src = rainImg;
  const sunsetTime = document.createElement("p");
  sunsetTime.innerText = sunsetValue;
  setDataDiv.append(sunsetImg, sunsetTime);
  sunsetDiv.append(setHeader, setDataDiv);

  sunDiv.append(sunriseDiv, sunsetDiv);

  const hourlyForecastDiv = document.createElement("div");
  hourlyForecastDiv.classList = "hour-forecast";
  const heading = document.createElement("div");
  heading.classList = "hour-forecast-header";
  const headingImg = document.createElement("img");
  headingImg.src = rainImg;
  const headingText = document.createElement("h1");
  headingText.innerText = "HOURLY FORECAST";
  heading.append(headingImg, headingText);
  const forecastDiv = document.createElement("ul");
  forecastDiv.classList = "forecasts";
  hourlyForecastDiv.append(heading, forecastDiv);

  content.append(locationNameDiv, weatherNow, moreAboutWeather, sunDiv, hourlyForecastDiv);
  document.body.append(content);
}

function hourForecast(scale, tempValues) {
  let unit = "C";
  if (scale === "us") {
    unit = "F";
  }
  for (const element of tempValues.hours) {
    const tempDiv1 = document.createElement("li");
    tempDiv1.classList = "forecast-now";

    const tempTime = document.createElement("h1");
    const rawNumber = parseInt(element.datetime);

    if (rawNumber < 10) {
      const refinedNumber = "0" + rawNumber;
      tempTime.innerText = `${refinedNumber}:00`;
    } else {
      tempTime.innerText = `${rawNumber}:00`;
    }

    const tempImg = document.createElement("img");
    tempImg.src = rainImg;
    const tempText = document.createElement("p");
    tempText.innerText = `${element.temp} º${unit}`;
    tempDiv1.append(tempTime, tempImg, tempText);
    document.querySelector(".forecasts").append(tempDiv1);
  }
}

export { renderElements, hourForecast };
