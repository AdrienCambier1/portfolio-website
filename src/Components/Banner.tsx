import { Link } from "react-router-dom";
import Instagram from "../Images/instagram.png";
import Linkedin from "../Images/linkedin.png";
import Cv from "../Images/cv.png";
import Github from "../Images/github.png";
import { LanguageContext } from "../Contexts";
import { useContext } from "react";
import traductions from "../Data/traductions.json";

interface BannerProps {
  image: any;
}

export default function Banner({ image }: BannerProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="header-container" id="top">
      <img className="header-img" src={image} />
      <div className="header-content">
        <p className="description-text">
          {
            traductions[selectedLanguage as "fr" | "en"][
              "Étudiant en informatique (Data, IA, Développement)"
            ]
          }
        </p>
        <p className="name-text">Adrien Cambier</p>
        <nav className="social-links">
          <Link to="/Adrien Cambier CV.pdf" target="_blank">
            <img className="social-media" src={Cv} />
          </Link>
          <Link to="https://github.com/Cambier-Adrien/" target="_blank">
            <img className="social-media" src={Github} />
          </Link>
          <Link to="https://www.instagram.com/adri1.cr/" target="_blank">
            <img className="social-media" src={Instagram} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/adrien-cambier-0820b127b/"
            target="_blank"
          >
            <img className="social-media" src={Linkedin} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
