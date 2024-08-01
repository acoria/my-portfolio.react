import { useState } from "react";
import { Value } from "../../core/types/Value";
import { Language } from "./types/Language";

export const useLanguageStorage = (): Value<Language> => {
  const [language, setLanguage] = useState(Language.EN);
  return [language, setLanguage];
};
