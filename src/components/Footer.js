import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center">
      <a href="https://github.com/Dale2k">
        <FaGithub />
      </a>
      <span> - </span>

      <a href="https://www.linkedin.com/">
        <FaLinkedinIn />
      </a>
    </footer>
  );
}

export default Footer;
