import { Link } from "react-router-dom";
import traductions from "../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../Contexts";

interface BlackCardProps {
  image: any;
  details: string;
  title: string;
  content: string;
  link: string;
  blank?: boolean;
}

export default function BlackCard({
  image,
  details,
  title,
  content,
  link,
  blank = false,
}: BlackCardProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="content">
      <img
        src={image}
        alt={title}
        className="content-img"
        loading="lazy"
        decoding="async"
      />
      <div className="text-area">
        <p className="content-date">{details}</p>
        <p className="content-title">{title}</p>
        <p className="content-text">{content}</p>
      </div>
      {blank ? (
        <a
          className="content-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.learnMore"]}
        </a>
      ) : (
        <Link className="content-button" to={link}>
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.learnMore"]}
        </Link>
      )}
    </div>
  );
}
