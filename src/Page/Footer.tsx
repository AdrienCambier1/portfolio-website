import { Cv, Instagram, Linkedin, Planet, Github } from "../Images/Icons";
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
    zh: "简体中文 (ZH)",
  };

  const cvFiles = {
    fr: "/Adrien Cambier CV Alt.pdf",
    en: "/EN Adrien Cambier CV Alt.pdf",
    zh: "/EN Adrien Cambier CV Alt.pdf",
  };

  return (
    <footer>
      <div className="name-footer">
        <p className="title-footer">Adrien Cambier</p>
        <nav className="social-links">
          <a
            href={
              cvFiles[selectedLanguage as keyof typeof cvFiles] || cvFiles.fr
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="social-media" src={Cv} alt="CV" />
          </a>
          <a
            href="https://github.com/AdrienCambier1/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="social-media" src={Github} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/adri1.cr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="social-media" src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-cambier-0820b127b/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="social-media" src={Linkedin} alt="LinkedIn" />
          </a>
        </nav>
      </div>
      <div className="name-footer">
        <p className="title-footer">
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["Ressources"]}
        </p>
        <nav className="nav-links-footer">
          <ul>
            <li>
              <ScrollLink to="/" id="propos">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["Qui suis-je"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="skills">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["Compétences"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="parcours">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["Parcours"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="portfolio">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["Portfolio"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="/" id="loisirs">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["Loisirs"]}
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="name-footer">
        <p className="title-footer">
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["Contact"]}
        </p>
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
            <LanguageSelectorContent
              content="简体中文 (ZH)"
              isActive={selectedLanguage === "zh"}
              onClick={() => handleLanguageSelector("zh")}
            />
          </ul>
        </div>
        <LanguageSelectorButton
          onClick={() => setLanguageSelector(!languageSelector)}
          image={Planet}
          content={language[selectedLanguage as "fr" | "en" | "zh"]}
          rotate="180"
          isActive={languageSelector}
        />
        <p className="crédit">
          {
            traductions[selectedLanguage as "fr" | "en" | "zh"][
              "©2023 Adrien Cambier, Tous Droits Réservés."
            ]
          }
        </p>
      </div>
    </footer>
  );
}
