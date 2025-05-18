import { Banner, TitleSection } from "../../Components";
import { Bangkok } from "../../Images";
import { Link } from "react-router-dom";
import traductions from "../../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";

export default function NotFound() {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      <Banner image={Bangkok} />
      <div className="black-section">
        <TitleSection title="404 Non trouvé" />
        <p className="introduction-text">
          La page que vous recherchez n'existe pas pour le moment.
        </p>
        <Link className="content-button" to="/">
          {traductions[selectedLanguage as "fr" | "en"]["Retour à l'accueil"]}
        </Link>
      </div>
    </>
  );
}
