import React, { useState } from "react";
import "./style.css";

import { validateEmail } from "./utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("email is invalid");

      return;
    }
    if (!message) {
      setErrorMessage(`message is required`);
      return;
    }

    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage(`Thank you for your message`);
  };

  return (
    <div>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          className="usser"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          textarea
          value={message}
          name="message"
          rows={4}
          cols={40}
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
