import Downward from "../Images/vers-le-bas.png";

interface SelectorButtonProps {
  onClick: () => void;
  isActive?: boolean;
  image: any;
  content: string;
  rotate?: string;
}

export default function SelectorButton({
  onClick,
  isActive,
  image,
  content,
}: SelectorButtonProps) {
  return (
    <div className="language-content underline" onClick={onClick}>
      <img className="language-logo" src={image} />
      <p className="language-text">{content}</p>
      <img
        className={`language-logo rotate90deg ${isActive && "rotate180deg"}`}
        src={Downward}
      />
    </div>
  );
}
