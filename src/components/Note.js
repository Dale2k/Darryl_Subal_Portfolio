import React from "react";
import imageSrc from "./pages/utils/Note Taker.png";

function Note() {
  return (
    <a
      href="https://secret-island-81595.herokuapp.com/"
      className="btn btn-primary"
    >
      <img src={imageSrc} alt=" " className="mr-2" />
    </a>
  );
}

export default Note;
