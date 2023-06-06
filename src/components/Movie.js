import React from "react";
import imageSrc from "./pages/utils/Movie.png";

function Movie() {
  return (
    <a
      href="https://github.com/Dale2k/development-movie-app
"
      className="btn btn-primary"
    >
      <img src={imageSrc} alt=" " className="mr-2" />
    </a>
  );
}

export default Movie;
