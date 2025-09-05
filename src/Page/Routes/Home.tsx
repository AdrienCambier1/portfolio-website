import { Link } from "react-router-dom";
import {
  Banner,
  SkillSection,
  BlackCard,
  TitleSection,
  WhiteCard,
} from "../../Components";
import {
  Bayoke,
  Coding,
  Language,
  Office,
  Ynov,
  Iut,
  Léonard,
  Piano,
  Temple,
  Game,
  Contact,
  Pokemon,
  Music,
  Netsafe,
  Event,
} from "../../Images";
import portfolioList from "../../Data/portfolioList.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import traductions from "../../Data/traductions.json";
import text from "../../Data/text.json";

interface TranslatableText {
  [key: string]: string;
}

interface List {
  id: string;
  category: TranslatableText;
  technologies: TranslatableText;
  title: TranslatableText;
  description: TranslatableText;
  class: string;
}

interface PortfolioList {
  projects: Record<string, List[]>;
}

export default function Home() {
  const { selectedLanguage } = useContext(LanguageContext);

  const portfolioImages: { [key: string]: string } = {
    "2025-1": Pokemon,
    "2025-3": Music,
    "2025-4": Netsafe,
    "2025-5": Event,
  };

  const list: PortfolioList = portfolioList;
  const selectedProjects = [
    list.projects[2025][0],
    list.projects[2025][2],
    list.projects[2025][3],
    list.projects[2025][4],
  ];

  const cvFiles = {
    fr: "/Adrien Cambier CV Alt.pdf",
    en: "/EN Adrien Cambier CV Alt.pdf",
  };

  return (
    <>
      <Banner image={Bayoke} />
      <section id="propos" className="beige-section">
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"]["À propos de moi"]
          }
        />
        <p className="introduction-text">
          {text.about[1][selectedLanguage as "fr" | "en"]}
          <br />
          {text.about[2][selectedLanguage as "fr" | "en"]}
          <br />
          {text.about[3][selectedLanguage as "fr" | "en"]}
        </p>
        <Link
          className="beige-button"
          to={cvFiles[selectedLanguage as keyof typeof cvFiles] || cvFiles.fr}
          target="_blank"
        >
          {traductions[selectedLanguage as "fr" | "en"]["Consultez mon CV"]}
        </Link>
      </section>
      <section id="skills" className="skills-section">
        <SkillSection
          image={Coding}
          title={traductions[selectedLanguage as "fr" | "en"]["Codage"]}
          content="HTML - CSS - Javascript - Typscript - PHP - Python - Java - C#"
          link="/portfolio"
        />
        <SkillSection
          image={Language}
          title={traductions[selectedLanguage as "fr" | "en"]["Langues"]}
          content={
            traductions[selectedLanguage as "fr" | "en"][
              "Français - Anglais - Thaï"
            ]
          }
          link="/travel"
        />
        <SkillSection
          image={Office}
          title={traductions[selectedLanguage as "fr" | "en"]["Bureautique"]}
          content="Excel - Canva - GoogleDocs - Linux - Windows - Figma"
          link="/portfolio"
        />
      </section>
      <section id="parcours" className="black-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Mon parcours"]}
        />
        <div className="content-container">
          <BlackCard
            image={Ynov}
            details="2024-2025"
            title={
              traductions[selectedLanguage as "fr" | "en"][
                "Bachelor Informatique Ynov Campus"
              ]
            }
            content={text.background[1][selectedLanguage as "fr" | "en"]}
            link="https://www.ynov.com/campus/sophia"
          />
          <BlackCard
            image={Iut}
            details="2022-2024"
            title="DUT R&T Sophia Antipolis"
            content={text.background[2][selectedLanguage as "fr" | "en"]}
            link="https://univ-cotedazur.fr/formation/offre-de-formation/but-reseaux-telecommunications"
          />
          <BlackCard
            image={Léonard}
            details="2019-2022"
            title={
              traductions[selectedLanguage as "fr" | "en"][
                "Lycée Léonard de Vinci"
              ]
            }
            content={text.background[3][selectedLanguage as "fr" | "en"]}
            link="https://www.leonarddevinci.net/"
          />
        </div>
      </section>
      <section id="portfolio" className="beige-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Mon portfolio"]}
        />
        <p className="introduction-text">
          {text.portfolio[1][selectedLanguage as "fr" | "en"]}
        </p>
        <Link className="beige-button" to="/portfolio">
          {traductions[selectedLanguage as "fr" | "en"]["Mes projets"]}
        </Link>
        <div className="grid-container">
          {selectedProjects.map((project, index) => (
            <WhiteCard
              key={index}
              image={portfolioImages[project.id] || Temple}
              details={project.technologies[selectedLanguage]}
              title={project.title[selectedLanguage]}
              content={project.description[selectedLanguage]}
              link={`/project/${project.id}`}
            />
          ))}
        </div>
      </section>
      <section id="loisirs" className="black-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Mes loisirs"]}
        />
        <div className="content-container">
          <BlackCard
            image={Piano}
            details={`${
              traductions[selectedLanguage as "fr" | "en"]["Depuis"]
            } 2019`}
            title={traductions[selectedLanguage as "fr" | "en"]["Le Piano"]}
            content={text.hobbies[1][selectedLanguage as "fr" | "en"]}
            link="/piano"
          />
          <BlackCard
            image={Temple}
            details={`${
              traductions[selectedLanguage as "fr" | "en"]["Depuis"]
            } 2010`}
            title={traductions[selectedLanguage as "fr" | "en"]["Les voyages"]}
            content={text.hobbies[2][selectedLanguage as "fr" | "en"]}
            link="/travel"
          />
          <BlackCard
            image={Game}
            details={`${
              traductions[selectedLanguage as "fr" | "en"]["Depuis"]
            } 2010`}
            title={
              traductions[selectedLanguage as "fr" | "en"]["Les jeux vidéos"]
            }
            content={text.hobbies[3][selectedLanguage as "fr" | "en"]}
            link="/games"
          />
        </div>
      </section>
      <section id="contact" className="contact-section">
        <img className="contact-background" src={Contact} />
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Me contacter"]}
        />
        <form
          className="mail"
          method="POST"
          action="https://formsubmit.co/adriencambier2004@gmail.com"
        >
          <p className="contact-text">
            {traductions[selectedLanguage as "fr" | "en"]["Identité"]}*
          </p>
          <div className="contact-identity">
            <div className="identity">
              <input type="text" name="name" />
              <p className="contact-text">
                {traductions[selectedLanguage as "fr" | "en"]["Nom"]}
              </p>
            </div>
            <div className="identity">
              <input type="text" name="email" />
              <p className="contact-text">Email</p>
            </div>
          </div>
          <p className="contact-text">Message*</p>
          <textarea id="comments" name="coments" />
          <input
            id="submit"
            className="send-button"
            type="submit"
            value={traductions[selectedLanguage as "fr" | "en"]["Envoyer"]}
          />
        </form>
      </section>
    </>
  );
}
