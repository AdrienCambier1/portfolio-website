import { Banner, TitleSection } from "../../Components";
import Gallery from "../../Images/galerie.jpg";
import { Link, useParams } from "react-router-dom";
import {
  Android,
  Computer,
  Wires,
  Satellite,
  Showcase,
  Restaurant,
  Cyber,
  Migration,
  Ia,
  Wordpress,
  Pokemon,
  HarryPotter,
  Music,
  Netsafe,
  Event,
} from "../../Images";
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

interface Project {
  title: TranslatableText;
  description: TranslatableText;
  skills: TranslatableText;
  buttons?: ProjectButton[];
  banner: string;
  gallery: string;
}

interface PortfolioProjects {
  projects: Record<string, Project>;
}

export default function Project() {
  const { selectedLanguage } = useContext(LanguageContext);
  const { projectId } = useParams<{ projectId: string }>();

  const images: Record<string, any> = {
    Computer,
    Wires,
    Satellite,
    Showcase,
    Restaurant,
    Android,
    Cyber,
    Migration,
    Ia,
    Wordpress,
    Pokemon,
    HarryPotter,
    Music,
    Netsafe,
    Event,
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
          <TitleSection title="404 Non trouvé" />
          <p className="introduction-text">
            Le projet que vous recherchez n'existe pas pour le moment.
          </p>
          <Link className="beige-button" to="/">
            {traductions[selectedLanguage as "fr" | "en"]["Retour à l'accueil"]}
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
          <img
            className="portfolio-img"
            src={images[project.banner]}
            alt={project.title[selectedLanguage]}
          />
          <p className="portfolio-text">
            {formatDescription(project.description[selectedLanguage])}
          </p>
          <p className="portfolio-text">
            {traductions[selectedLanguage as "fr" | "en"]["Compétences"]} :{" "}
            {project.skills[selectedLanguage]}
          </p>
          <div className="flex">
            {project.buttons &&
              project.buttons.map((button, index) => (
                <Link
                  key={index}
                  className="beige-button"
                  to={button.link}
                  target="_blank"
                >
                  {button.name[selectedLanguage]}
                </Link>
              ))}
          </div>
          <TitleSection
            title={
              traductions[selectedLanguage as "fr" | "en"]["Galerie d'images"]
            }
          />
          {galleryImages &&
            Object.keys(galleryImages).map((imageKey, index) => (
              <img
                key={index}
                className="portfolio-img alternate-img"
                src={galleryImages[imageKey]}
              />
            ))}
        </div>
      </section>
    </>
  );
}
