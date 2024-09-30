import { AppConfig } from "../../AppConfig";
import { IProduct } from "../model/IProduct";
import { ProductList } from "../productList/ProductList";

export const ProductSection: React.FC = () => {
  const peter = {
    name: "Peter Hoffmann",
    profileLink: AppConfig.PROFILE_LINK_PETER,
  };

  const products: IProduct[] = [
    {
      title: "CRM für Kampfsportschulen",
      coProducers: [peter],
      description: [
        "Verwaltet alle Schüler mit Adressen, Graduierung und Trainingsfortschritt.",
        "Übersicht über alle an einzelnen Trainings teilnehmenden Schüler durch deren Registrierung.",
        "Vereinbarung von Probetrainings mit automatisiertem E-Mail-Versand.",
      ],
      imageLink: "./assets/products/Yeoljeong.png",
    },
    {
      title: "Color Palette Generator",
      description: [
        "Generiere dir für dein Entwicklungsprojekte eine Farbpalette mit ausreichend Variationen.",
        "Prüfe durch Design-Beispiele direkt, ob Farben zusammen harmonisieren.",
        "Lasse dir den zugehörigen CSS/SCSS Code generieren, um ihn direkt in dein Projekt einzufügen.",
      ],
      imageLink: "./assets/products/ColorPaletteGenerator.png",
      linkToProduct: AppConfig.COLOR_PALETTE_GENERATOR_LINK,
      receiveDonations: true,
    },
    {
      title: "Letter to Number",
      coProducers: [peter],
      description: [
        "Hast du dich bei einem Buchstaben schon mal gefragt, an welcher Position im Alphabet er ist oder ob ein Buchstabe vor einem anderen kommt?",
        "Ob für deinen eigenen Passwortalgorithmus, Wörter alphabetisch sortieren oder den Escape Room, unser (Entwickler-) Meinung nach ist dies eine sehr nützlicher Fähigkeit.",
        "Diese App ermöglicht es dir in beide Richtungen - also Buchstabe zu Zahl oder Zahl zu Buchstabe - zu lernen und verwendet ein internes Karteikartensystem wie beim Vokabeltraining, damit du möglichst schnell Fortschritte machen kannst.",
      ],
      imageLink: "./assets/products/LetterToNumber.png",
      linkToGooglePlayStore: AppConfig.LETTER_TO_NUMBER_PLAY_STORE_LINK,
      linkToProduct: AppConfig.LETTER_TO_NUMBER_LINK,
      receiveDonations: true,
    },
  ];

  return <ProductList products={products} />;
};
