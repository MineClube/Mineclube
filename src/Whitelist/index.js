import whiteListSvg from "../images/image 1.svg";
import furnaceSvg from "../images/Minecraft Furnace.svg";
import goldenAppleSvg from "../images/Minecraft Golden Apple.svg";
import shieldSvg from "../images/Shield.svg";
import backgroundSvg from "../images/fonW.png";
import { useState, useEffect } from "react";

export const Whitelist = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 850);
  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth > 850;
      setIsDesktop(isNowDesktop);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsDesktop]);
  return (
    <div id={isDesktop ? "white-list" : "white-list-mobile"}>
      <div id="whitelist-block1">
        <div id="whitelist-row1">
          <img src={whiteListSvg} alt="whitelist" />
          <img src={shieldSvg} alt="security" />
        </div>
        <div>
          <h3 className="title">Ти майже на сервері!</h3>
          <p className="list-text">
            Тепер тобі потрібно вибрати платформу, з якої ти будеш грати:
            <span className="purple-animated"> Java</span> чи{" "}
            <span className="purple-animated">Bedrock</span>.
          </p>
          <p className="list-text">
            Після того, як ти надішлеш заявку, протягом дня з тобою зв'яжеться
            адміністрація і повідомить, що{" "}
            <span className="purple-animated">додала тебе до вайтліста</span>
          </p>
          <p className="list-text">
            Ми засуджуємо і не підтримуємо використання російських ігрових
            лаунчерів і настійно просимо їх не використовувати! Альтернативою
            можуть бути ліцензійні, закордонні або{" "}
            <span className="ukraine-animated">українські</span> ігрові
            лаунчери.
          </p>
        </div>
      </div>
      <div id={isDesktop ? "whitelist-block2" : "whitelist-block2-mobile"}>
        <img src={backgroundSvg} alt="bg" />
        <div id={isDesktop ? "button-container" : "button-container-mobile"}>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdF4vCFEdrXbIyD6LU7-CIiWaPQG4xtjXo2wPX8KQkniu9NkQ/viewform",
                "_blank",
                "noopener,noreferrer"
              )
            }
            id="java-button"
          >
            Java edition
            <img height="100%" src={goldenAppleSvg} alt="java" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf-wZocMbYzoV6AFAb5VFhAaYqQyR0kLVt5fcWK-NBUvDXdjg/viewform",
                "_blank",
                "noopener,noreferrer"
              )
            }
            id="bedrock-button"
          >
            Bedrock edition
            <img height="100%" src={furnaceSvg} alt="bedrock" />
          </button>
        </div>
      </div>
    </div>
  );
};
