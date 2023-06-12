import React from "react";
import imageSrc from "./pages/utils/Password.png";

function Password() {
  return (
    <a
      href="https://dale2k.github.io/ds_password_generator/"
      className="btn btn-primary"
    >
      <img src={imageSrc} alt=" " className="mr-2" />
    </a>
  );
}

export default Password;
