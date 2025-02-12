import { useState, useEffect, useCallback, useMemo } from "react";
import mineclubeSvg from "../images/image.svg";
import block2MobileSvg from "../images/Union-mobile.svg";
import fox from "../images/fox.svg";
import block2bg from "../images/Union.svg";
import am from "../images/Frame 34.svg";
import iconSvg from "../images/вайтлист.svg";
import contacts from "../images/Frame 11.svg";
import toggleSvg from "../images/Toggle On.svg";
import shield from "../images/Shield.svg";
import mascotSvg from "../images/маскот (2).svg";
import atmoCraftSvg from "../images/a56789de-3e23-4567-b61c-2770335365e8 1.svg";
import peopleSvg from "../images/People.svg";
import iconLogo from "../images/иконка (1).svg";
import mascotMobile from "../images/mascot-mobile.svg";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isDesktop: window.innerWidth > 480,
    isDesktop2: window.innerWidth > 570,
    isDesktop3: window.innerWidth > 750,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isDesktop: window.innerWidth > 480,
        isDesktop2: window.innerWidth > 570,
        isDesktop3: window.innerWidth > 750,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const HrWithVisibility = ({ id, visibleHrs }) => {
  return <hr id={id} className={visibleHrs.includes(id) ? "visible" : ""} />;
};

const TitleContainer = ({ title, id, visibleHrs, isDesktop3 }) => {
  return (
    <div className="title-container">
      <h3 style={!isDesktop3 ? { marginBottom: "0" } : {}}>{title}</h3>
      {!isDesktop3 && <HrWithVisibility id={id} visibleHrs={visibleHrs} />}
    </div>
  );
};

export const Information = () => {
  const screenSize = useScreenSize();
  const [visibleHrs, setVisibleHrs] = useState([]);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      setVisibleHrs((prev) =>
        entry.isIntersecting
          ? [...prev, id]
          : prev.filter((item) => item !== id)
      );
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection, screenSize.isDesktop3]);

  const renderHr = useCallback(
    (id) => <HrWithVisibility id={id} visibleHrs={visibleHrs} />,
    [visibleHrs]
  );

  const infoBlock1 = useMemo(
    () =>
      screenSize.isDesktop && (
        <div id="info-block1">
          <img width="100%" src={mineclubeSvg} alt="mineclube" />
          <img className="fox" src={fox} alt="fox" />
        </div>
      ),
    [screenSize.isDesktop]
  );

  const infoBlock2 = useMemo(
    () => (
      <div id="info-block2">
        <img
          height="100%"
          width="100%"
          id="info-block2-bg"
          src={screenSize.isDesktop2 ? block2bg : block2MobileSvg}
          alt="bg"
        />
        <div id="info-block2-sc1">
          <p lang="en" className="bold-title">
            Java
          </p>
          {renderHr("hr1")}
          <p lang="en">ua.minecraft.xyz</p>
        </div>
        <div id="info-block2-sc2">
          <p lang="en" className="bold-title">
            Bedrock
          </p>
          {renderHr("hr2")}
          <p>
            Назва: <span lang="en">MineClub</span>
          </p>
          <p lang="en">IP: 51.75.33.145</p>
          <p lang="ua">Порт: 19139</p>
        </div>
        <img id="am" src={am} alt="AM" />
      </div>
    ),
    [screenSize.isDesktop2, renderHr]
  );

  const infoBlock3 = useMemo(
    () => (
      <div id="info-block3">
        <TitleContainer
          title="Все про нас"
          id="hr4"
          visibleHrs={visibleHrs}
          isDesktop3={screenSize.isDesktop3}
        />
        <div className="sub-info-block">
          <div className="info-row">
            <img src={iconLogo} alt="logo" />
            <p className="info-title">MineClub</p>
            <img src={contacts} alt="contacts" />
          </div>
          <p style={{ marginBottom: "0" }} className="main-title">
            Основне, що про нас треба знати,
          </p>
          <p style={{ marginTop: "0" }} className="secondary-title">
            це те, що ми починали як клуб гри в нашому навчальному закладі.
          </p>
          <p className="secondary-title">
            Проте згодом ми стали <span>найбільшим клубом у школі</span> і
            зрозуміли, що нам потрібно розвиватися далі
          </p>
          <p className="secondary-title">
            Тому ми вийшли за межі шкільного клубу і почали розвивати ідею{" "}
            <span>українського атмосферного Майнкрафту</span> поза школою.
          </p>
        </div>
      </div>
    ),
    [screenSize.isDesktop3, visibleHrs]
  );

  const infoBlock4 = useMemo(
    () => (
      <div id="info-block4">
        <img
          id="info-mascot"
          src={screenSize.isDesktop2 ? mascotSvg : mascotMobile}
          alt="mascot"
        />
        <div id="info-mascot-text">
          <p>Наш маскот</p>
          {renderHr("hr3")}
        </div>
      </div>
    ),
    [screenSize.isDesktop2, renderHr]
  );

  const infoBlock5 = useMemo(
    () => (
      <div id="info-block5">
        <TitleContainer
          title="Все про вайтлист"
          id="hr5"
          visibleHrs={visibleHrs}
          isDesktop3={screenSize.isDesktop3}
        />
        <div className="sub-info-block">
          <div className="info-row">
            <img src={iconSvg} alt="logo" />
            <p className="info-title">Whitelist</p>
            <img src={shield} alt="shield" />
          </div>
          <p className="main-title">Основне, що треба знати про вайтлист:</p>
          <p className="secondary-title">
            Оскільки сервер є приватним, на ньому включено{" "}
            <span style={{ color: "white", alignItems: "center" }}>
              вайтлист{" "}
              <img
                style={{ marginBottom: "-5px" }}
                src={toggleSvg}
                alt="toggle"
              />
            </span>
          </p>
          <p className="secondary-title">
            Щоб мати можливість пограти на нашому атмосферному приватному
            сервері, <span>тобі потрібно потрапити до вайтлиста</span>
          </p>
          <p className="secondary-title">
            Для цього перейди у вкладку{" "}
            <span onClick={() => {}}>Whitelist</span>, заповни форму — і ось, це
            все! Найближчим часом адміністрація додасть тебе до вайтлисту та
            сповістить тебе про це ;)
          </p>
        </div>
        {!screenSize.isDesktop && (
          <img className="fox-mobile" src={fox} alt="fox" />
        )}
      </div>
    ),
    [screenSize.isDesktop, screenSize.isDesktop3, visibleHrs]
  );

  const infoBlock6 = useMemo(
    () => (
      <div id="info-block6">
        <TitleContainer
          title="Все про сервер"
          id="hr6"
          visibleHrs={visibleHrs}
          isDesktop3={screenSize.isDesktop3}
        />
        <div className="sub-info-block">
          <div className="info-row">
            <img src={atmoCraftSvg} alt="logo" />
            <p className="info-title">AtmoCraft</p>
            <img src={peopleSvg} alt="people" />
          </div>
          <p className="main-title">Основне, що треба знати про сервер:</p>
          <p className="secondary-title">
            <span>Приватний ванільний сервер з вайтлистом</span>
          </p>
          <p className="secondary-title">
            Кастомна генерація, що додає ексклюзивності світу. Голосовий чат.{" "}
            <span className="cursive-text">Регулярні івентові батлпаси.</span>
          </p>
          <p className="secondary-title">
            Це те, що дає нашому серверу можливість бути ексклюзивним і
            залишатися ванільним сервером <span>для кожного.</span>
          </p>
        </div>
      </div>
    ),
    [screenSize.isDesktop3, visibleHrs]
  );

  return (
    <div id="information-container">
      {infoBlock1}
      {infoBlock2}
      <div id="section-container">
        <section id="section1">
          {infoBlock3}
          {infoBlock4}
        </section>
        <section id="section2">
          {infoBlock5}
          {infoBlock6}
        </section>
      </div>
    </div>
  );
};
