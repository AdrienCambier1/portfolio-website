import { Link } from "react-router-dom";
import {
  Banner,
  SkillSection,
  BlackCard,
  TitleSection,
  WhiteCard,
} from "../../Components";
import {
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
  Thailand,
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
      <Banner image={Thailand} />
      <section id="propos" className="beige-section">
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en" | "zh"]["sections.about.title"]
          }
        />
        <p className="introduction-text">
          {text.about[1][selectedLanguage as "fr" | "en" | "zh"]}
          <br />
          {text.about[2][selectedLanguage as "fr" | "en" | "zh"]}
          <br />
          {text.about[3][selectedLanguage as "fr" | "en" | "zh"]}
        </p>
        <a
          className="beige-button"
          href={cvFiles[selectedLanguage as keyof typeof cvFiles] || cvFiles.fr}
          target="_blank"
          rel="noopener noreferrer"
        >
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.viewCv"]}
        </a>
      </section>
      <section id="skills" className="skills-section">
        <SkillSection
          image={Coding}
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["skills.coding"]}
          content="HTML - CSS - Javascript - Typscript - PHP - Python - Java - C#"
          link="/portfolio"
        />
        <SkillSection
          image={Language}
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["skills.languages"]}
          content={
            traductions[selectedLanguage as "fr" | "en" | "zh"][
              "skills.spokenLanguages"
            ]
          }
          link="/voyages"
        />
        <SkillSection
          image={Office}
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["skills.officeTools"]}
          content="Excel - Canva - GoogleDocs - Linux - Windows - Figma"
          link="/portfolio"
        />
      </section>
      <section id="parcours" className="black-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["sections.background.title"]}
        />
        <div className="content-container">
          <BlackCard
            image={Ynov}
            details="2024-2025"
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"][
                "education.ynov.title"
              ]
            }
            content={text.background[1][selectedLanguage as "fr" | "en" | "zh"]}
            link="https://www.ynov.com/campus/sophia"
            blank
          />
          <BlackCard
            image={Iut}
            details="2022-2024"
            title="DUT R&T Sophia Antipolis"
            content={text.background[2][selectedLanguage as "fr" | "en" | "zh"]}
            link="https://univ-cotedazur.fr/formation/offre-de-formation/but-reseaux-telecommunications"
            blank
          />
          <BlackCard
            image={Léonard}
            details="2019-2022"
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"][
                "education.highSchool.title"
              ]
            }
            content={text.background[3][selectedLanguage as "fr" | "en" | "zh"]}
            link="https://www.leonarddevinci.net/"
            blank
          />
        </div>
      </section>
      <section id="portfolio" className="beige-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["sections.portfolio.title"]}
        />
        <p className="introduction-text">
          {text.portfolio[1][selectedLanguage as "fr" | "en" | "zh"]}
        </p>
        <Link className="beige-button" to="/portfolio">
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["projects.title"]}
        </Link>
        <div className="grid-container">
          {selectedProjects.map((project, index) => (
            <WhiteCard
              key={index}
              image={portfolioImages[project.id] || Temple}
              details={project.technologies[selectedLanguage]}
              title={project.title[selectedLanguage]}
              content={project.description[selectedLanguage]}
              link={`/projets/${project.id}`}
            />
          ))}
        </div>
      </section>
      <section id="loisirs" className="black-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["sections.hobbies.title"]}
        />
        <div className="content-container">
          <BlackCard
            image={Piano}
            details={`${
              traductions[selectedLanguage as "fr" | "en" | "zh"]["common.since"]
            } 2019`}
            title={traductions[selectedLanguage as "fr" | "en" | "zh"]["hobbies.piano.title"]}
            content={text.hobbies[1][selectedLanguage as "fr" | "en" | "zh"]}
            link="/piano"
          />
          <BlackCard
            image={Temple}
            details={`${
              traductions[selectedLanguage as "fr" | "en" | "zh"]["common.since"]
            } 2010`}
            title={traductions[selectedLanguage as "fr" | "en" | "zh"]["hobbies.travel.title"]}
            content={text.hobbies[2][selectedLanguage as "fr" | "en" | "zh"]}
            link="/voyages"
          />
          <BlackCard
            image={Game}
            details={`${
              traductions[selectedLanguage as "fr" | "en" | "zh"]["common.since"]
            } 2010`}
            title={
              traductions[selectedLanguage as "fr" | "en" | "zh"]["hobbies.games.title"]
            }
            content={text.hobbies[3][selectedLanguage as "fr" | "en" | "zh"]}
            link="/jeux"
          />
        </div>
      </section>
      <section id="contact" className="contact-section">
        <img
          src={Contact}
          alt="Contact background"
          className="contact-background"
          loading="lazy"
          decoding="async"
        />
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["sections.contact.title"]}
        />
        <form
          className="mail"
          method="POST"
          action="https://formsubmit.co/adriencambier2004@gmail.com"
        >
          <p className="contact-text">
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["contact.identity"]}*
          </p>
          <div className="contact-identity">
            <div className="identity">
              <input type="text" name="name" />
              <p className="contact-text">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["contact.name"]}
              </p>
            </div>
            <div className="identity">
              <input type="text" name="email" />
              <p className="contact-text">
                {traductions[selectedLanguage as "fr" | "en" | "zh"]["contact.email"]}
              </p>
            </div>
          </div>
          <p className="contact-text">
            {traductions[selectedLanguage as "fr" | "en" | "zh"]["contact.message"]}*
          </p>
          <textarea id="comments" name="coments" />
          <input
            id="submit"
            className="send-button"
            type="submit"
            value={traductions[selectedLanguage as "fr" | "en" | "zh"]["actions.send"]}
          />
        </form>
      </section>
    </>
  );
}
