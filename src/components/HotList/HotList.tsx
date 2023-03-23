import { NewsModel } from "../../models";

import styles from "./HotList.module.scss";

interface Props {
  newsList: NewsModel[];
}

export function HotList({ newsList }: Props) {
  return (
    <ul className={styles.list}>
      {newsList.map((news) => (
        <li key={news.id}>
          <div className="caption">
            <span>{news.date.toLocaleDateString()}</span>
            <span>{news.date.toLocaleTimeString()}</span>
          </div>
          <a href="#">{news.title}</a>
        </li>
      ))}
    </ul>
  );
}
