import whiteListSvg from "./images/image 1.svg";
import furnaceSvg from "./images/Minecraft Furnace.svg";
import goldenAppleSvg from "./images/Minecraft Golden Apple.svg";
import shieldSvg from "./images/Shield.svg";
import backgroundSvg from "./images/fonW.png";

export const Whitelist = () => {
  return (
    <div id="white-list">
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
      <div id="whitelist-block2">
        <img src={backgroundSvg} alt="bg" />
        <div id="button-container">
          <button id="java-button">
            Java edition
            <img src={goldenAppleSvg} alt="java" />
          </button>
          <button id="bedrock-button">
            Bedrock edition
            <img src={furnaceSvg} alt="bedrock" />
          </button>
        </div>
      </div>
    </div>
  );
};
