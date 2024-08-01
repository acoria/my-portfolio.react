import { useContext } from "react";
import { Value } from "../../core/types/Value";
import { Language } from "./types/Language";
import { AppContext } from "../../context/AppContext";

export const useLanguage = (): Value<Language> => {
  const context = useContext(AppContext);
  return context.language;
};
