import Downward from "../Images/vers-le-bas.png";

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
      <img className="project-logo" src={image} />
      <p className="language-text">{content}</p>
      <img
        className={`project-logo ${!isActive && "rotate90deg"}`}
        src={Downward}
      />
    </div>
  );
}
