import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
}

export default App;
