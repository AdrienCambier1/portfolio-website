import { Link } from "react-router-dom";

interface SkillSectionProps {
  image: any;
  title: string;
  content: string;
  link: string;
}

export default function SkillSection({
  image,
  title,
  content,
  link,
}: SkillSectionProps) {
  return (
    <div className="skills">
      <img
        src={image}
        alt={title}
        className="skills-img"
        loading="lazy"
        decoding="async"
      />
      <Link id="codage" to={link}>
        <p className="skills-title">{title}</p>
        <p className="skills-text">{content}</p>
      </Link>
    </div>
  );
}
