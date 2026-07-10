import { Downward } from "../Images/Icons";

interface ProjectSelectorButtonProps {
  onClick: () => void;
  isActive?: boolean;
  image: any;
  content: string;
}

export default function ProjectSelectorButton({
  onClick,
  isActive,
  image,
  content,
}: ProjectSelectorButtonProps) {
  return (
    <div className="project-text" onClick={onClick}>
      <img
        className="project-logo"
        src={image}
        alt="Project icon"
        decoding="async"
      />
      <p className="language-text">{content}</p>
      <img
        className={`project-logo ${!isActive && "rotate90deg"}`}
        src={Downward}
        alt="Dropdown icon"
        decoding="async"
      />
    </div>
  );
}
