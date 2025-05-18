import { Verify } from "../Images";

interface LanguageSelectorContentProps {
  isActive?: boolean;
  content: string;
  onClick?: () => void;
}

export default function LanguageSelectorButton({
  isActive,
  content,
  onClick,
}: LanguageSelectorContentProps) {
  return (
    <li className="language-selector-text" onClick={onClick}>
      <img
        className={`language-logo ${!isActive && "invisible"}`}
        src={Verify}
      />
      {content}
    </li>
  );
}
