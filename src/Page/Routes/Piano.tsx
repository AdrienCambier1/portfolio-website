import { Banner, TitleSection, Separation, WhiteCard } from "../../Components";
import { PianoBg } from "../../Images";
import piano from "../../Data/piano.json";
import traductions from "../../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import text from "../../Data/text.json";

export default function Piano() {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      <Banner image={PianoBg} />
      <section className="black-section">
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"]["À propos du piano"]
          }
        />
        <p className="introduction-text">
          {text.piano[1][selectedLanguage as "fr" | "en"]}
        </p>
        <Separation />
        <p className="introduction-text">
          {text.piano[2][selectedLanguage as "fr" | "en"]}
        </p>
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"]["Comment j'apprends"]
          }
        />
        <p className="introduction-text">
          {text.piano[3][selectedLanguage as "fr" | "en"]}
        </p>
        <TitleSection
          title={
            traductions[selectedLanguage as "fr" | "en"][
              "Quelques pièces apprises"
            ]
          }
        />
        <div className="grid-container">
          {piano.songs.map((song, index) => (
            <WhiteCard
              key={index}
              image={song.image}
              details={`${
                traductions[selectedLanguage as "fr" | "en"]["Difficulté"]
              } | ${song.difficulty[selectedLanguage as "fr" | "en"]}`}
              title={song.title}
              content={song.artist}
              link={song.links}
            />
          ))}
        </div>
      </section>
    </>
  );
}
