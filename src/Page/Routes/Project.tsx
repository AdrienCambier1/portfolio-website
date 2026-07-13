import { Banner, TitleSection } from "../../Components";
import { Gallery } from "../../Images";
import { Link, useParams } from "react-router-dom";
import portfolioProjects from "../../Data/portfolioProjects.json";
import { useContext, useEffect, useState } from "react";
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

type GalleryModule = Record<string, string>;

const galleryLoaders: Record<string, () => Promise<GalleryModule>> = {
  AndroidImages: () =>
    import("../../Images/Android").then(
      (module) => module as unknown as GalleryModule,
    ),
  ChatgptImages: () =>
    import("../../Images/Chatgpt").then(
      (module) => module as unknown as GalleryModule,
    ),
  ExtranetImages: () =>
    import("../../Images/Extranet").then(
      (module) => module as unknown as GalleryModule,
    ),
  NetworkImages: () =>
    import("../../Images/Network").then(
      (module) => module as unknown as GalleryModule,
    ),
  PentestImages: () =>
    import("../../Images/Pentest").then(
      (module) => module as unknown as GalleryModule,
    ),
  IntranetImages: () =>
    import("../../Images/Intranet").then(
      (module) => module as unknown as GalleryModule,
    ),
  PortfolioImages: () =>
    import("../../Images/Portfolio").then(
      (module) => module as unknown as GalleryModule,
    ),
  RestaurantImages: () =>
    import("../../Images/Restaurant").then(
      (module) => module as unknown as GalleryModule,
    ),
  SnifferImages: () =>
    import("../../Images/Sniffer").then(
      (module) => module as unknown as GalleryModule,
    ),
  WebsiteImages: () =>
    import("../../Images/Website").then(
      (module) => module as unknown as GalleryModule,
    ),
  PokemonImages: () =>
    import("../../Images/Pokemon").then(
      (module) => module as unknown as GalleryModule,
    ),
  HarryPotterImages: () =>
    import("../../Images/HarryPotter").then(
      (module) => module as unknown as GalleryModule,
    ),
  MusicImages: () =>
    import("../../Images/Music").then(
      (module) => module as unknown as GalleryModule,
    ),
  NetsafeImages: () =>
    import("../../Images/Netsafe").then(
      (module) => module as unknown as GalleryModule,
    ),
  EventImages: () =>
    import("../../Images/Event").then(
      (module) => module as unknown as GalleryModule,
    ),
};

export default function Project() {
  const { selectedLanguage } = useContext(LanguageContext);
  const { projectId } = useParams<{ projectId: string }>();
  const projects: PortfolioProjects = portfolioProjects;
  const project = projectId ? projects.projects[projectId] : undefined;
  const [galleryImages, setGalleryImages] = useState<GalleryModule>({});

  useEffect(() => {
    if (!project) {
      setGalleryImages({});
      return;
    }

    const loadGallery = galleryLoaders[project.gallery];

    if (!loadGallery) {
      setGalleryImages({});
      return;
    }

    let isMounted = true;
    setGalleryImages({});

    loadGallery().then((loadedImages) => {
      if (isMounted) {
        setGalleryImages(loadedImages);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [project]);

  if (!project) {
    return (
      <>
        <Banner image={Gallery} />
        <section className="beige-section">
          <TitleSection
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"]["errors.notFound.title"]
            }
          />
          <p className="introduction-text">
            {
              traductions[selectedLanguage as "fr" | "en" | "zh"][
                "errors.projectNotFound.description"
              ]
            }
          </p>
          <Link className="beige-button" to="/">
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.backHome"]}
          </Link>
        </section>
      </>
    );
  }

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
              {traductions[selectedLanguage as "fr" | "en" | "zh"]["common.skills"]} :{" "}
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
              traductions[selectedLanguage as "fr" | "en" | "zh"]["projects.gallery.title"]
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
                <img
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
