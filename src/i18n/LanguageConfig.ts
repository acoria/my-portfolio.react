import { Language } from "../hooks/useLanguage/types/Language";

class LanguageConfigDefault {
  language: Language = Language.DE;
}
export const LanguageConfig = new LanguageConfigDefault();
