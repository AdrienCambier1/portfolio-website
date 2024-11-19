import { Link } from "react-router-dom";
import Cv from "../Images/cv.png";
import Instagram from "../Images/instagram.png";
import Linkedin from "../Images/linkedin.png";
import Planet from "../Images/planète.png";
import Github from "../Images/github.png";
import { useState, useContext } from "react";
import { ScrollLink } from "../Functions";
import { LanguageSelectorButton, LanguageSelectorContent } from "../Components";
import { LanguageContext } from "../Contexts";
import traductions from "../Data/traductions.json";

export default function Footer() {
  const [languageSelector, setLanguageSelector] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageSelector = (language: string) => {
    setSelectedLanguage(language);
    setLanguageSelector(false);
  };

  const language = {
    fr: "Français (FR)",
    en: "English (UK)",
  };

  return (
    <footer>
      <div className="name-footer">
        <p className="title-footer">Adrien Cambier</p>
        <nav className="social-links">
          <Link to="">
            <img className="social-media" src={Cv} />
          </Link>
          <Link to="https://github.com/Cambier-Adrien/">
            <img className="social-media" src={Github} />
          </Link>
          <Link to="https://www.instagram.com/adri1.cr/">
            <img className="social-media" src={Instagram} />
          </Link>
          <Link to="https://www.linkedin.com/in/adrien-cambier-0820b127b/">
            <img className="social-media" src={Linkedin} />
          </Link>
        </nav>
      </div>
      <div className="name-footer">
        <p className="title-footer">
          {traductions[selectedLanguage as "fr" | "en"]["Ressources"]}
        </p>
        <nav className="nav-links-footer">
          <ul>
            <li>
              <ScrollLink to="/" id="propos">
                {traductions[selectedLanguage as "fr" | "en"]["Qui suis-je"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="skills">
                {traductions[selectedLanguage as "fr" | "en"]["Compétences"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="parcours">
                {traductions[selectedLanguage as "fr" | "en"]["Parcours"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="portfolio">
                {traductions[selectedLanguage as "fr" | "en"]["Portfolio"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="loisirs">
                {traductions[selectedLanguage as "fr" | "en"]["Loisirs"]}
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="name-footer">
        <p className="title-footer">Contact</p>
        <nav className="nav-links-footer">
          <ul>
            <li>adriencambier2004@gmail.com</li>
            <li>+33 7 49 64 20 93</li>
          </ul>
        </nav>
      </div>
      <div className="name-footer">
        <div className={`language-selector ${languageSelector && "visible"}`}>
          <ul>
            <LanguageSelectorContent
              content="Français (FR)"
              isActive={selectedLanguage === "fr"}
              onClick={() => handleLanguageSelector("fr")}
            />
            <LanguageSelectorContent
              content="English (UK)"
              isActive={selectedLanguage === "en"}
              onClick={() => handleLanguageSelector("en")}
            />
          </ul>
        </div>
        <LanguageSelectorButton
          onClick={() => setLanguageSelector(!languageSelector)}
          image={Planet}
          content={language[selectedLanguage as "fr" | "en"]}
          rotate="180"
          isActive={languageSelector}
        />
        <p className="crédit">
          {
            traductions[selectedLanguage as "fr" | "en"][
              "©2023 Adrien Cambier, Tous Droits Réservés."
            ]
          }
        </p>
      </div>
    </footer>
  );
}
