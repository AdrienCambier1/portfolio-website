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
}

export default function WhiteCard({
  image,
  title,
  details,
  content,
  link,
}: WhiteCardProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="grid">
      <img className="grid-img" src={image} />
      <div className="textarea">
        <div>
          <p className="grid-date">{details}</p>
          <p className="grid-title">{title}</p>
          <p className="grid-text">{content}</p>
        </div>
        <Link className="grid-button" to={link}>
          {traductions[selectedLanguage as "fr" | "en"]["EN SAVOIR PLUS"]}
        </Link>
      </div>
    </div>
  );
}
