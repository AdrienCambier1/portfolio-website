import { Instagram, Linkedin, Cv, Github } from "../Images/Icons";
import { LanguageContext } from "../Contexts";
import { useContext } from "react";
import traductions from "../Data/traductions.json";

interface BannerProps {
  image: any;
}

export default function Banner({ image }: BannerProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  const cvFiles = {
    fr: "/Adrien Cambier CV Alt.pdf",
    en: "/EN Adrien Cambier CV Alt.pdf",
    zh: "/EN Adrien Cambier CV Alt.pdf",
  };

  return (
    <div className="header-container" id="top">
      <img
        src={image}
        alt="Banner"
        className="header-img"
        fetchPriority="high"
      />
      <div className="header-content">
        <p className="description-text">
          {
            traductions[selectedLanguage as "fr" | "en" | "zh"][
              "hero.role"
            ]
          }
        </p>
        <p className="name-text">Adrien Cambier</p>
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
            <img
              className="social-media"
              src={Github}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.instagram.com/adri1.cr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="social-media"
              src={Instagram}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-cambier-0820b127b/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="social-media"
              src={Linkedin}
              alt="LinkedIn"
            />
          </a>
        </nav>
      </div>
    </div>
  );
}
