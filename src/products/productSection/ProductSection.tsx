import { AppConfig } from "../../AppConfig";
import { IProduct } from "../model/IProduct";
import { ProductList } from "../productList/ProductList";

export const ProductSection: React.FC = () => {
  const products: IProduct[] = [
    {
      title: "Color Palette Generator",
      description: [
        "Generiere dir für dein Entwicklungsprojekte eine Farbpalette mit ausreichend Variationen.",
        "Prüfe durch Design-Beispiele direkt, ob Farben zusammen harmonisieren.",
        "Lasse dir den zugehörigen CSS/SCSS Code generieren, um ihn direkt in dein Projekt einzufügen.",
      ],
      imageLink: "./assets/products/ColorPaletteGenerator.png",
      linkToProduct: AppConfig.COLOR_PALETTE_GENERATOR_LINK,
    },
    {
      title: "Letter to Number",
      coProducers: [
        { name: "Peter Hoffmann", profileLink: "http://yobunet.de/profile/" },
      ],
      description: [
        "Hast du dich bei einem Buchstaben schon mal gefragt, an welcher Position im Alphabet er ist oder ob ein Buchstabe vor einem anderen kommt?",
        "Ob für deinen eigenen Passwortalgorithmus, Wörter alphabetisch sortieren oder den Escape Room, unser (Entwickler-) Meinung nach ist dies eine sehr nützlicher Fähigkeit.",
        "Diese App ermöglicht es dir in beide Richtungen - also Buchstabe zu Zahl oder Zahl zu Buchstabe - zu lernen und verwendet ein internes Karteikartensystem wie beim Vokabeltraining, damit du möglichst schnell Fortschritte machen kannst.",
      ],
      imageLink: "./assets/products/LetterToNumber.png",
      linkToGooglePlayStore: AppConfig.LETTER_TO_NUMBER_PLAY_STORE_LINK,
      linkToProduct: AppConfig.LETTER_TO_NUMBER_LINK,
    },
  ];

  return <ProductList products={products} />;
};
