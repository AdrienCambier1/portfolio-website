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
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en" | "zh"]["errors.notFound.title"]
          }
        />
        <p className="introduction-text">
          {
            traductions[selectedLanguage as "fr" | "en" | "zh"][
              "errors.pageNotFound.description"
            ]
          }
        </p>
        <Link className="content-button" to="/">
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.backHome"]}
        </Link>
      </div>
    </>
  );
}
