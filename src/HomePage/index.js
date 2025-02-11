import { useEffect, useRef } from "react";
import videoBackground from "../images/givHome.mp4";
import mineclubeTitle from "../images/image.svg";
import gearClube from "../images/image 7.svg";
import peopleSvg from "../images/People.svg";
import giftSvg from "../images/Christmas Gift.svg";
import confettiSvg from "../images/Confetti.svg";
import backrgoundMain from "../images/Rectangle 14.svg";

export const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Сповільнює відео в 3.3 рази
    }
  }, []);

  return (
    <div id="container-section1">
      <video
        ref={videoRef}
        className="video-background"
        src={videoBackground}
        autoPlay
        loop
        muted
      />
      <div className="overlay-video"></div>

      <section id="section1">
        <div id="section1-container">
          {/* Row 1 - Left and Right Boxes */}
          <div id="row1">
            <div id="top-left-box">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={mineclubeTitle}
                alt="MINECLUBE"
              />
            </div>
            <div id="top-right-container">
              <img
                onClick={() =>
                  window.open(
                    "https://t.me/MinecraftClubBot",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                id="tg-bot-button"
                src={gearClube}
                alt="gear"
              />
            </div>
          </div>

          {/* Main Content */}
          <div id="main-block">
            <img id="background-main" src={backrgoundMain} alt="pain svg" />
            <p id="text1">Вітаємо тебе на нашому сервері та клубі !</p>
            <p id="text2">
              Ми найатмосферніший сервер та доказ того, що все можливе!
            </p>
            <p id="text3">Все це і не тільки чекає на тебе ;)</p>

            <div id="coloredList">
              <div id="line-colored"></div>
              <ul>
                <li id="text-li1">Нові Друзі</li>
                <li id="text-li2">Крутий контент</li>
                <li id="text-li3">Івенти з призами</li>
              </ul>
            </div>
          </div>

          {/* Right-side Images */}
          <div id="down-right-container">
            <img height="100%" src={peopleSvg} alt="people" />
            <img height="100%" src={giftSvg} alt="gift" />
            <img height="100%" src={confettiSvg} alt="confetti" />
          </div>
        </div>
      </section>
    </div>
  );
};
