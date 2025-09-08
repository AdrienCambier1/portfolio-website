import { Link } from "react-router-dom";
import traductions from "../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../Contexts";

interface CareerCardProps {
  image: any;
  details: string;
  title: string;
  content: string;
  link: string;
}

export default function CareerCard({
  image,
  details,
  title,
  content,
  link,
}: CareerCardProps) {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="content">
      <img className="content-img" src={image} />
      <div className="text-area">
        <p className="content-date">{details}</p>
        <p className="content-title">{title}</p>
        <p className="content-text">{content}</p>
      </div>
      <Link className="content-button" to={link}>
        {traductions[selectedLanguage as "fr" | "en"]["EN SAVOIR PLUS"]}
      </Link>
    </div>
  );
}
