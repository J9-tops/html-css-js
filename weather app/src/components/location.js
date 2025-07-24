import { errorDiv } from "./error.js";
import { loadingDiv } from "./loading.js";
import { Location } from "./form.js";
import { hourForecast, renderElements } from "./dataContainer.js";
const fetchData = async () => {
  document.body.append(loadingDiv);
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Location.name}?unitGroup=${Location.scale}&include=days%2Chours%2Ccurrent&key=XNFBJP8KNKB8GK23P4PUFU2QV&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    );
    if (response.ok) {
      document.body.removeChild(loadingDiv);
    }
    const checkErrorDiv = document.querySelector(".error-container");
    if (checkErrorDiv !== null) {
      document.body.removeChild(errorDiv);
    }

    const json = await response.json();

    Location.name = json.resolvedAddress;
    Location["todayDate"] = json.days[0].datetime;
    Location["tempNow"] = json.currentConditions.temp;
    Location["tempDescription"] = json.days[0].conditions;
    Location["humidity"] = json.currentConditions.humidity;
    Location["windSpeed"] = json.currentConditions.windspeed;
    Location["highestTemp"] = json.days[0].tempmax;
    Location["sunrise"] = json.currentConditions.sunrise;
    Location["sunset"] = json.currentConditions.sunset;
    Location.days = [...json.days];

    renderElements(
      Location.name,
      Location.todayDate,
      Location["tempNow"],
      Location["tempDescription"],
      Location["humidity"],
      Location["windSpeed"],
      Location["highestTemp"],
      Location["sunrise"],
      Location["sunset"],
      Location.scale
    );
    hourForecast(Location.scale, Location.days[0]);
  } catch (error) {
    document.body.removeChild(loadingDiv);
    document.body.append(errorDiv);
  }
};

export { fetchData };
