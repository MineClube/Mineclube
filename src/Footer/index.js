/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import iconLogo from "./images/иконка (1).svg";
import telegramLogo from "./images/Telegram App.svg";
import discordLogo from "./images/Discord New.svg";
import { useNavigate, useLocation } from "react-router-dom";
import scrollUp from "./images/Move Up.svg";

export const Footer = () => {
  const navigate = useNavigate();
  const [lineWidth, setLineWidth] = useState("0%");
  const [buttonMargin, setButtonMargin] = useState("25px");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;

      const scrollPercent = (scrollTop + windowHeight) / docHeight;

      if (scrollPercent >= 0.85) {
        setLineWidth("80%");

        // Реалізація clamp() у JS
        const min = -55;
        const max = -15;
        const viewportFactor = -window.innerWidth * 0.1; // Симуляція -10vw
        const clampedValue = Math.max(min, Math.min(max, viewportFactor));

        setButtonMargin(`${clampedValue}px`);
      } else {
        setLineWidth("0%");
        setButtonMargin("25px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer>
        {location.pathname === "/rules" ||
        location.pathname === "/information" ? (
          <a
            style={{ marginTop: buttonMargin }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            id="scroll-button"
            className="icon-button"
          >
            <img id="scroll-img" src={scrollUp} alt="scroll-up" />
          </a>
        ) : (
          ""
        )}
        <div id="footer-background"></div>
        <div style={{ width: lineWidth }} className="footer-bar"></div>

        <div className="icons-container">
          <a
            onClick={() => navigate("/information")}
            id="purple-hover-footer"
            className="icon-button"
          >
            <img className="icon-button-image" src={iconLogo} alt="logo" />
          </a>
          <a
            href="https://discord.gg/pC43MXWaYH"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
          >
            <img className="icon-button-image" src={discordLogo} alt="logo" />
          </a>
          <a
            href="https://discord.gg/pC43MXWaYH"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
          >
            <img className="icon-button-image" src={telegramLogo} alt="logo" />
          </a>
        </div>
        <p className="footer-text1">
          © 2024 The site is the property of MineClub. All rights reserved.
        </p>
        <p className="footer-text2">
          Not an official Minecraft product. We are in no way affiliated with or
          endorsed by Mojang Synergies AB, Microsoft Corporation or other
          rightsholders.
        </p>
      </footer>
    </>
  );
};
