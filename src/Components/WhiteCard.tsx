import { Link } from "react-router-dom";
import traductions from "../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../Contexts";

interface WhiteCardProps {
  image: any;
  title: string;
  details: string;
  content: string;
  link: string;
  blank?: boolean;
}

export default function WhiteCard({
  image,
  title,
  details,
  content,
  link,
  blank = false,
}: WhiteCardProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="grid">
      <img
        src={image}
        alt={title}
        className="grid-img"
        loading="lazy"
        decoding="async"
      />
      <div className="textarea">
        <div>
          <p className="grid-date">{details}</p>
          <p className="grid-title">{title}</p>
          <p className="grid-text">{content}</p>
        </div>
        {blank ? (
          <a
            className="grid-button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.learnMore"]}
          </a>
        ) : (
          <Link className="grid-button" to={link}>
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.learnMore"]}
          </Link>
        )}
      </div>
    </div>
  );
}
