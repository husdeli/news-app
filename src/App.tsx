import { withReactQuery } from "./providers";
import { IndexPage } from "./pages/Index";

import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <header>
        <div className={styles.container}>
          <a href="#">News</a>
        </div>
      </header>
      <main className={styles.container}>
        <IndexPage />
      </main>
    </div>
  );
}

export default withReactQuery(App);
