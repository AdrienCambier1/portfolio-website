import {
  Banner,
  TitleSection,
  Separation,
  ProjectSelectorButton,
  LanguageSelectorContent,
  PortfolioCard,
} from "../../Components";
import { useState, useContext } from "react";
import { Bangkok, Calendar, Search } from "../../Images";
import portfolioList from "../../Data/portfolioList.json";
import { LanguageContext } from "../../Contexts";
import traductions from "../../Data/traductions.json";
import text from "../../Data/text.json";

interface TranslatableTextProps {
  [key: string]: string;
}

interface ListProps {
  id: string;
  category: TranslatableTextProps;
  technologies: TranslatableTextProps;
  title: TranslatableTextProps;
  description: TranslatableTextProps;
  class: string;
}

interface PortfolioListProps {
  projects: Record<string, ListProps[]>;
}

export default function Porfolio() {
  const [yearSelector, setYearSelector] = useState<boolean>(false);
  const [searchSelector, setSearchSelector] = useState<boolean>(false);
  const [year, setYear] = useState<string>("all");
  const [search, setSearch] = useState<string>("all");
  const { selectedLanguage } = useContext(LanguageContext);

  const yearOptions: Record<string, { fr: string; en: string }> = {
    2025: {
      fr: "2025",
      en: "2025",
    },
    2024: {
      fr: "2024",
      en: "2024",
    },
    2023: {
      fr: "2023",
      en: "2023",
    },
    all: {
      fr: "Tout",
      en: "All",
    },
  };

  const searchOptions: Record<string, { fr: string; en: string }> = {
    info: {
      fr: "Informatique",
      en: "Computer Science",
    },
    network: {
      fr: "Réseaux",
      en: "Networks",
    },
    cyber: {
      fr: "Cybersécurité",
      en: "Cybersecurity",
    },
    all: {
      fr: "Tout",
      en: "All",
    },
  };

  const handleYearSelector = () => {
    setSearchSelector(false);
    setYearSelector(!yearSelector);
  };

  const handleSearchSelector = () => {
    setYearSelector(false);
    setSearchSelector(!searchSelector);
  };

  const handleYear = (id: string) => {
    setYear(id);
    setYearSelector(!yearSelector);
  };

  const handleSearch = (id: string) => {
    setSearch(id);
    setSearchSelector(!searchSelector);
  };

  const list: PortfolioListProps = portfolioList;

  return (
    <>
      <Banner image={Bangkok} />
      <section className="black-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en"]["Mes projets"]}
        />
        <p className="introduction-text">
          {text.portfolio[2][selectedLanguage as "fr" | "en"]}
        </p>
        <Separation />
        <div className="project-selection">
          <div className="project-content underline year">
            <ProjectSelectorButton
              image={Calendar}
              content={yearOptions[year][selectedLanguage as "fr" | "en"]}
              isActive={yearSelector}
              onClick={() => handleYearSelector()}
            />
            <div className={`project-selector ${yearSelector && "visible"}`}>
              <ul>
                {Object.entries(yearOptions).map(([option, value]) => (
                  <LanguageSelectorContent
                    content={value[selectedLanguage as "fr" | "en"]}
                    onClick={() => handleYear(option)}
                    isActive={year === option}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="project-content underline theme">
            <ProjectSelectorButton
              image={Search}
              content={searchOptions[search][selectedLanguage as "fr" | "en"]}
              isActive={searchSelector}
              onClick={() => handleSearchSelector()}
            />
            <div className={`project-selector ${searchSelector && "visible"}`}>
              <ul>
                {Object.entries(searchOptions).map(([option, value]) => (
                  <LanguageSelectorContent
                    content={value[selectedLanguage as "fr" | "en"]}
                    onClick={() => handleSearch(option)}
                    isActive={search === option}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        {Object.keys(portfolioList.projects).map((thisYear, index) => {
          if (year === "all" || thisYear === year) {
            return (
              <div key={index} className="project-container">
                <div className="project-content year">
                  <p className="name-header">{thisYear}</p>
                </div>
                <div className="project-content theme">
                  {list.projects[
                    thisYear as keyof typeof portfolioList.projects
                  ].map((project, index) => {
                    if (search === "all" || project.class === search) {
                      return (
                        <PortfolioCard
                          id={project.id}
                          customClass={project.class}
                          category={project.category[selectedLanguage]}
                          technologies={project.technologies[selectedLanguage]}
                          title={project.title[selectedLanguage]}
                          description={project.description[selectedLanguage]}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
}
