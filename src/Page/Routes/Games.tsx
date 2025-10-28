import { Banner, TitleSection, Separation, WhiteCard } from "../../Components";
import { GameBg } from "../../Images";
import minecraftProjects from "../../Data/minecraftProjects.json";
import traductions from "../../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import text from "../../Data/text.json";

export default function Games() {
  const { selectedLanguage } = useContext(LanguageContext);

  const images: { [key: string]: string } = {
    ThaiTemple:
      "https://static.planetminecraft.com/files/image/minecraft/project/2023/904/16617944_l.webp",
    Palais:
      "https://static.planetminecraft.com/files/image/minecraft/project/2023/385/16610068_l.webp",
    Poste:
      "https://static.planetminecraft.com/files/image/minecraft/project/2021/682/14605794_xl.webp",
    Château:
      "https://static.planetminecraft.com/files/image/minecraft/project/2021/970/14569589_xl.webp",
  };
  return (
    <>
      <Banner image={GameBg} />
      <section className="black-section">
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"][
              "À propos des jeux vidéos"
            ]
          }
        />
        <p className="introduction-text">
          {text.videogames[1][selectedLanguage as "fr" | "en"]}
        </p>
        <Separation />
        <p className="introduction-text">
          {text.videogames[2][selectedLanguage as "fr" | "en"]}
        </p>
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"][
              "Mes projets minecraft"
            ]
          }
        />
        <div className="grid-container">
          {minecraftProjects.projects.map((project, index) => (
            <WhiteCard
              key={index}
              image={images[project.image]}
              details={project.details}
              title={project.project}
              content={project.source}
              link={project.links}
            />
          ))}
        </div>
      </section>
    </>
  );
}
