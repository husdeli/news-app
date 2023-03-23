import { NewsModel } from "../../models";

import styles from "./PopularList.module.scss";

interface Props {
  newsList: NewsModel[];
}

export function PopularList({ newsList }: Props) {
  return (
    <ul className={styles.list}>
      {newsList.map((news) => (
        <li key={news.id}>
          <a href="#">
            <article>
              <h3>{news.title}</h3>
            </article>
          </a>
        </li>
      ))}
    </ul>
  );
}
