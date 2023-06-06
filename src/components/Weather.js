import React from "react";
import imageSrc from "./pages/utils/Weather.png";

function Weather() {
  return (
    <a
      href="https://github.com/Dale2k/weather-computing-machine"
      className="btn btn-primary"
    >
      <img src={imageSrc} alt=" " className="mr-2" />
    </a>
  );
}

export default Weather;
