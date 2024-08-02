import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";
import { Page } from "./pages/Page";

function App() {
  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <Page />
    </AppContext.Provider>
  );
}

export default App;
