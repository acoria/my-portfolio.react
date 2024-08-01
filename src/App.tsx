import { AppContext } from "./context/AppContext";
import { Portfolio } from "./features/portfolio/Portfolio";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";

function App() {
  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <Portfolio />
    </AppContext.Provider>
  );
}

export default App;
