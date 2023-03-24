import { HeroArticle, PopularList, HotList } from "../components";
import { useNews } from "../hooks";
import reactLogo from "../assets/react.svg";

import styles from "./Index.module.scss";

export function IndexPage() {
  const { mostPopularNews, restNews, hotNews, isError, isLoading } = useNews();

  if (isLoading) {
    return <img src={reactLogo} className={styles.loader} alt="Loader" />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

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
