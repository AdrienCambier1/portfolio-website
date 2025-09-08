import { Link } from "react-router-dom";
import { Instagram, Linkedin, Cv, Github } from "../Images";
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
  };

  return (
    <div className="header-container" id="top">
      <img className="header-img" src={image} />
      <div className="header-content">
        <p className="description-text">
          {
            traductions[selectedLanguage as "fr" | "en"][
              "Développeur Fullstack | Data & IA (En cours de formation)"
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
          >
            <img className="social-media" src={Cv} />
          </a>
          <a href="https://github.com/AdrienCambier1/" target="_blank">
            <img className="social-media" src={Github} />
          </a>
          <a href="https://www.instagram.com/adri1.cr/" target="_blank">
            <img className="social-media" src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-cambier-0820b127b/"
            target="_blank"
          >
            <img className="social-media" src={Linkedin} />
          </a>
        </nav>
      </div>
    </div>
  );
}
