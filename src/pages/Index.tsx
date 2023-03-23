import { HeroArticle, PopularList } from "../components";
import { HotList } from "../components/HotList";
import { useNews } from "../hooks";

import styles from "./Index.module.scss";

export function IndexPage() {
  const { mostPopularNews, restNews, hotNews } = useNews();
  return (
    <div className={styles.page}>
      <section className={styles.popularSection}>
        {mostPopularNews && <HeroArticle news={mostPopularNews} />}
        {restNews && <PopularList newsList={restNews} />}
      </section>
      <section>
        <h2>Hot news</h2>
        {hotNews && <HotList newsList={hotNews} />}
      </section>
    </div>
  );
}
