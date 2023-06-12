import React from "react";
import imageSrc from "./pages/utils/Quiz.png";

function Quiz() {
  return (
    <a
      href="https://dale2k.github.io/turbo_guacamole_code_quiz/"
      className="btn btn-primary"
    >
      <img src={imageSrc} alt=" " className="mr-2" />
    </a>
  );
}

export default Quiz;
