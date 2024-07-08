import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://github.com/NickyMasondo/weather-reacts-nicky"
        target="blank"
      >
        {" "}
        Sinikeziwe Masondo{" "}
      </a>
      is open-sourced on
      <a href="https://github.com/" target="blank">
        GitHub{" "}
      </a>
      and hosted on
      <a href="https:///" target="blank">
        {" "}
        Netlify
      </a>
    </footer>
  );
}
