import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger, Close } from "../Images";
import { ScrollLink } from "../Functions";
import traductions from "../Data/traductions.json";
import { LanguageContext } from "../Contexts";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (menu) {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.removeProperty("overflow-y");
      document.documentElement.style.removeProperty("overflow-y");
    }
  }, [menu]);

  return (
    <header className="menu">
      <ScrollLink to="/" id="top" className="name-header">
        ADRIEN CAMBIER
      </ScrollLink>
      <nav className={`nav-links ${menu && "menu-on"}`}>
        <div className="name-menu">
          <p className="name-menu-text">
            <ScrollLink to="/" id="top" onClick={() => setMenu(!menu)}>
              ADRIEN CAMBIER
            </ScrollLink>
          </p>
          <img className="close" src={Close} onClick={() => setMenu(!menu)} />
        </div>
        <ul>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="propos"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["À propos de moi"]}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="skills"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["Mes compétences"]}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="parcours"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["Mon parcours"]}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="portfolio"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["Mon portfolio"]}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="loisirs"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["Mes loisirs"]}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="links"
              to="/"
              id="contact"
              onClick={() => setMenu(false)}
            >
              {traductions[selectedLanguage as "fr" | "en"]["Me contacter"]}
            </ScrollLink>
          </li>
        </ul>
      </nav>
      {menu && (
        <div className="background-nav" onClick={() => setMenu(!menu)} />
      )}

      <img
        className="hamburger-menu"
        src={Hamburger}
        onClick={() => setMenu(!menu)}
      />
    </header>
  );
}
