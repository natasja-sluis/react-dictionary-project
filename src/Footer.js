import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      coded by{" "}
      <a
        href="https://natasjasluis.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Natasja Sluis
      </a>{" "}
      <a
        href="https://github.com/Twesha33/react-dictionary-project"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}
