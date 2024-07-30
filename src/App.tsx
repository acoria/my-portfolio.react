import styles from "./App.module.css";
import { ReactComponent as ClockLoader } from "./assets/clock_loader_60.svg";

function App() {
  return (
    <div className={styles.app}>
      <ClockLoader className={styles.icon}/>
      <p>Work in progress</p>
    </div>
  );
}

export default App;
