import { Language } from "../hooks/useLanguage/types/Language";

class LanguageConfigDefault {
  language: Language = Language.EN;
}
export const LanguageConfig = new LanguageConfigDefault();
