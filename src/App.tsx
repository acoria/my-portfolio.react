import styles from "./App.module.css";
import { Header } from "./features/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
