import { Verify } from "../Images/Icons";

interface LanguageSelectorContentProps {
  isActive?: boolean;
  content: string;
  onClick?: () => void;
}

export default function LanguageSelectorContent({
  isActive,
  content,
  onClick,
}: LanguageSelectorContentProps) {
  return (
    <li className="language-selector-text" onClick={onClick}>
      <img
        className={`language-logo ${!isActive && "invisible"}`}
        src={Verify}
        alt="Selected icon"
        decoding="async"
      />
      {content}
    </li>
  );
}
