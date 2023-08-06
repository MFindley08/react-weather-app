import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://michelle-findley-frontend-dev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Míchelle Findley</strong>
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/MFindley08/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://in-the-air-5-weather-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
