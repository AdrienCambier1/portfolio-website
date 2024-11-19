import { Link } from "react-router-dom";

interface PortfolioCardProps {
  id: string;
  customClass: string;
  category: string;
  technologies: string;
  title: string;
  description: string;
}

export default function PortfolioCard({
  id,
  customClass,
  category,
  technologies,
  title,
  description,
}: PortfolioCardProps) {
  return (
    <Link className="project-box" to={`/project/${id}`}>
      <div className={`theme-box ${customClass}`}>{category}</div>
      <div className="project-description">
        <p className="description-theme">{technologies}</p>
        <p className="description-title">{title}</p>
        <p className="description-theme">{description}</p>
      </div>
    </Link>
  );
}
