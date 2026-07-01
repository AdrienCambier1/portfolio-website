import { Link } from "react-router-dom";
import traductions from "../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../Contexts";
import { Image } from "./";

interface BlackCardProps {
  image: any;
  details: string;
  title: string;
  content: string;
  link: string;
}

export default function BlackCard({
  image,
  details,
  title,
  content,
  link,
}: BlackCardProps) {
  const { selectedLanguage } = useContext(LanguageContext);
  const isExternalLink = /^https?:\/\//.test(link);

  return (
    <div className="content">
      <Image src={image} alt={title} className="content-img" />
      <div className="text-area">
        <p className="content-date">{details}</p>
        <p className="content-title">{title}</p>
        <p className="content-text">{content}</p>
      </div>
      {isExternalLink ? (
        <a
          className="content-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {traductions[selectedLanguage as "fr" | "en"]["EN SAVOIR PLUS"]}
        </a>
      ) : (
        <Link className="content-button" to={link}>
          {traductions[selectedLanguage as "fr" | "en"]["EN SAVOIR PLUS"]}
        </Link>
      )}
    </div>
  );
}
