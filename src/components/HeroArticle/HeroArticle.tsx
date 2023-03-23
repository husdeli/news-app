import { NewsModel } from "../../models";

import styles from "./HeroArticle.module.scss";

interface Props {
  news: NewsModel;
}

export function HeroArticle({ news }: Props) {
  return (
    <article>
      <a href="#">
        <figure className={styles.imageContainer}>
          <img src={news.imageUrl} alt="Very popular image" />
          <figcaption>
            <h1>{news.title}</h1>
          </figcaption>
        </figure>
      </a>
    </article>
  );
}
