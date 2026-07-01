import {
  Banner,
  TitleSection,
  Separation,
  CountryCard,
  Image,
} from "../../Components";
import { TravelBg } from "../../Images";
import {
  FirstPic,
  SecondPic,
  ThirdPic,
  FourthPic,
  FifthPic,
  SixthPic,
  SeventhPic,
  EighthPic,
} from "../../Images/Gallery";
import traductions from "../../Data/traductions.json";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import text from "../../Data/text.json";

export default function Travel() {
  const { selectedLanguage } = useContext(LanguageContext);

  const images = [
    FirstPic,
    SecondPic,
    ThirdPic,
    FourthPic,
    FifthPic,
    SixthPic,
    SeventhPic,
    EighthPic,
  ];

  return (
    <>
      <Banner image={TravelBg} />
      <div className="beige-section">
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["Mes voyages"]}
        />
        <p className="introduction-text">
          {text.travels[1][selectedLanguage as "fr" | "en" | "zh"]}
        </p>
        <a
          className="beige-button"
          href="https://www.instagram.com/adri1.cr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {traductions[selectedLanguage as "fr" | "en" | "zh"]["Mon Instagram"]}
        </a>
        <p className="introduction-text">
          {text.travels[2][selectedLanguage as "fr" | "en" | "zh"]}
        </p>
        <Separation />
        <CountryCard
          image="https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpYW5nJTIwbWFpfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["Thaïlande"]}
          content={text.travels[3][selectedLanguage as "fr" | "en" | "zh"]}
        />
        <Separation />
        <CountryCard
          image="https://static.independent.co.uk/2023/07/04/09/iStock-1193239486.jpg"
          title={
            traductions[selectedLanguage as "fr" | "en" | "zh"]["Émirats Arabes Unis"]
          }
          content={text.travels[4][selectedLanguage as "fr" | "en" | "zh"]}
        />
        <Separation />
        <CountryCard
          image="https://media.istockphoto.com/id/1248448159/fr/photo/villefranche-sur-mer-village-in-france.jpg?s=612x612&w=0&k=20&c=1efCuW9JAlQm11CthKCArfFJtCycCm33vzzqWpCx2nI="
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["France"]}
          content={text.travels[5][selectedLanguage as "fr" | "en" | "zh"]}
        />
        <Separation />
        <CountryCard
          image="https://media.routard.com/image/81/3/venise-grand-canal.1479813.142.jpg"
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["Italie"]}
          content={text.travels[6][selectedLanguage as "fr" | "en" | "zh"]}
        />
        <TitleSection
          title={traductions[selectedLanguage as "fr" | "en" | "zh"]["Galerie photo"]}
        />
        <div className="grid-container">
          {images.map((img, index) => {
            if (index % 2 === 0) {
              return (
                <div className="grid space-between" key={index}>
                  <Image
                    src={img}
                    alt={`Travel ${index + 1}`}
                    className="grid-img galerie-pic"
                  />

                  {images[index + 1] && (
                    <Image
                      src={images[index + 1]}
                      alt={`Travel ${index + 2}`}
                      className="grid-img galerie-pic"
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
