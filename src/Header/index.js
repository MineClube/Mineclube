import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import navLogo from "../images/иконка.svg";
import discordSvg from "../images/Discord New.svg";
import telegramSvg from "../images/Telegram App.svg";
import mapSvg from "../images/Map Marker.svg";
import burgerMenuSvg from "../images/burger-menu-svgrepo-com.svg";
import complaintIcon from "../images/Rules.svg";
import homeIcon from "../images/Exterior.svg";
import informationIcon from "../images/Search Property.svg";
import rulesIcon from "../images/Shield-1.svg";
import whitelistIcon from "../images/Hand Box.svg";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/information", label: "Information" },
  { path: "/whitelist", label: "Whitelist" },
  { path: "/rules", label: "Rules" },
];

const externalLinks = [
  {
    href: "https://discord.gg/pC43MXWaYH",
    src: discordSvg,
    alt: "discord",
  },
  {
    href: "https://t.me/AtmoMine/1",
    src: telegramSvg,
    alt: "telegram",
  },
  {
    href: "https://atmocraftmap.dynmap.me/#world:-1:0:0:1500:0:0:0:0:perspective",
    src: mapSvg,
    alt: "map",
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 950);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const bluredOverflowRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!menuRef.current || !bluredOverflowRef.current) return;

    let timeoutId;

    if (isMenuOpen) {
      menuRef.current.style.left = "0px";
      bluredOverflowRef.current.style.display = "block";

      requestAnimationFrame(() => {
        bluredOverflowRef.current.style.opacity = "1";
      });
    } else {
      menuRef.current.style.left = "-30rem";
      bluredOverflowRef.current.style.opacity = "0";

      timeoutId = setTimeout(() => {
        if (!isMenuOpen) {
          bluredOverflowRef.current.style.display = "none";
        }
      }, 200); // Скорочуємо час, щоб уникнути багів
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth > 950;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  const renderNavLinks = (images) =>
    navLinks.map(({ path, label }, index) => (
      <button
        key={path}
        onClick={() => navigate(path)}
        className="button"
        id={location.pathname === path ? "target-site-text" : undefined}
      >
        {images ? (
          <img
            className="icons-menu"
            src={images[index]}
            width="30px"
            alt="icon"
          />
        ) : (
          ""
        )}
        {label}
      </button>
    ));
  const renderExternalLinks = () =>
    externalLinks.map(({ href, src, alt }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="icon-button"
      >
        <img className="icon-button-image" src={src} alt={alt} />
      </a>
    ));
  return (
    <>
      <header ref={navRef} className={isDesktop ? "header" : "mobile_header"}>
        {isDesktop ? (
          <>
            <img
              height="60px"
              className="logo-img"
              onClick={() => navigate("/")}
              src={navLogo}
              alt="home"
            />
            <div className="nav_block1">
              {renderNavLinks()}
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfVVL2PZNEGtz4VTpBpmHdUvyMVyoWwxTo6Mgzt0qy5K6zchA/viewform?usp=dialog",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="button"
              >
                Complaint
              </button>
            </div>
            <div className="nav_block2">{renderExternalLinks()}</div>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                toggleMenu();
              }}
              ref={burgerRef}
              className="menu-button"
            >
              <img className='burger-image' src={burgerMenuSvg} alt="menu" />
            </div>
            <div className="mobile_nav_block2">{renderExternalLinks()}</div>
            <img
              className="logo-img"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              src={navLogo}
              alt="home"
            />
          </>
        )}
      </header>
      <div ref={bluredOverflowRef} className="overlay"></div>
      <div ref={menuRef} className="menu">
        {renderNavLinks([homeIcon, informationIcon, whitelistIcon, rulesIcon])}
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfVVL2PZNEGtz4VTpBpmHdUvyMVyoWwxTo6Mgzt0qy5K6zchA/viewform?usp=dialog",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="button"
        >
          <img
            className="icons-menu"
            width="30px"
            src={complaintIcon}
            alt="Complaint"
          />
          Complaint
        </button>
      </div>
    </>
  );
};
