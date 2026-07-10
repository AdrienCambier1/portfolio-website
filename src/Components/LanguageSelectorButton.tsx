import { Downward } from "../Images/Icons";

interface LanguageSelectorButtonProps {
  onClick: () => void;
  isActive?: boolean;
  image: any;
  content: string;
  rotate?: string;
}

export default function LanguageSelectorButton({
  onClick,
  isActive,
  image,
  content,
}: LanguageSelectorButtonProps) {
  return (
    <div className="language-content underline" onClick={onClick}>
      <img
        className="language-logo"
        src={image}
        alt="Language icon"
        decoding="async"
      />
      <p className="language-text">{content}</p>
      <img
        className={`language-logo rotate90deg ${isActive && "rotate180deg"}`}
        src={Downward}
        alt="Dropdown icon"
        decoding="async"
      />
    </div>
  );
}
