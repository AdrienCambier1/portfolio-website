import { Banner, TitleSection, Image } from "../../Components";
import { Gallery } from "../../Images";
import { Link, useParams } from "react-router-dom";
import portfolioProjects from "../../Data/portfolioProjects.json";
import * as AndroidImages from "../../Images/Android";
import * as ChatgptImages from "../../Images/Chatgpt";
import * as ExtranetImages from "../../Images/Extranet";
import * as NetworkImages from "../../Images/Network";
import * as PentestImages from "../../Images/Pentest";
import * as PortfolioImages from "../../Images/Portfolio";
import * as RestaurantImages from "../../Images/Restaurant";
import * as SnifferImages from "../../Images/Sniffer";
import * as WebsiteImages from "../../Images/Website";
import * as IntranetImages from "../../Images/Intranet";
import * as PokemonImages from "../../Images/Pokemon";
import * as HarryPotterImages from "../../Images/HarryPotter";
import * as MusicImages from "../../Images/Music";
import * as NetsafeImages from "../../Images/Netsafe";
import * as EventImages from "../../Images/Event";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import traductions from "../../Data/traductions.json";

interface TranslatableText {
  [key: string]: string;
}

interface ProjectButton {
  name: TranslatableText;
  link: string;
}

interface ProjectData {
  title: TranslatableText;
  description: TranslatableText;
  skills: TranslatableText;
  buttons?: ProjectButton[];
  gallery: string;
}

interface PortfolioProjects {
  projects: Record<string, ProjectData>;
}

export default function Project() {
  const { selectedLanguage } = useContext(LanguageContext);
  const { projectId } = useParams<{ projectId: string }>();

  const images: Record<string, any> = {
    AndroidImages,
    ChatgptImages,
    ExtranetImages,
    NetworkImages,
    PentestImages,
    IntranetImages,
    PortfolioImages,
    RestaurantImages,
    SnifferImages,
    WebsiteImages,
    PokemonImages,
    HarryPotterImages,
    MusicImages,
    NetsafeImages,
    EventImages,
  };

  if (!projectId || !(projectId in portfolioProjects.projects)) {
    return (
      <>
        <Banner image={Gallery} />
        <section className="beige-section">
          <TitleSection
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"]["404 Non trouvé"]
            }
          />
          <p className="introduction-text">
            {
              traductions[selectedLanguage as "fr" | "en" | "zh"][
                "Le projet que vous recherchez n'existe pas pour le moment."
              ]
            }
          </p>
          <Link className="beige-button" to="/">
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["Retour à l'accueil"]}
          </Link>
        </section>
      </>
    );
  }

  const projects: PortfolioProjects = portfolioProjects;
  const project = projects.projects[projectId];
  const galleryImages = images[project.gallery as keyof typeof images];

  const formatDescription = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <>
      <Banner image={Gallery} />
      <section className="beige-section">
        <div className="portfolio-container">
          <TitleSection title={project.title[selectedLanguage]} />
          <p className="portfolio-text">
            {formatDescription(project.description[selectedLanguage])}
            <br />
            <span>
              {traductions[selectedLanguage as "fr" | "en" | "zh"]["Compétences"]} :{" "}
              {project.skills[selectedLanguage]}
            </span>
          </p>
          <div className="flex">
            {project.buttons &&
              project.buttons.map((button, index) => (
                <a
                  key={index}
                  className="beige-button"
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.name[selectedLanguage]}
                </a>
              ))}
          </div>
          <TitleSection
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"]["Galerie d'images"]
            }
          />
          {galleryImages &&
            Object.keys(galleryImages)
              .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)?.[0] || "0");
                const numB = parseInt(b.match(/\d+/)?.[0] || "0");
                return numA - numB;
              })
              .map((imageKey, index) => (
                <Image
                  key={index}
                  src={galleryImages[imageKey]}
                  alt={`Project ${index + 1}`}
                  className="portfolio-img"
                />
              ))}
        </div>
      </section>
    </>
  );
}
