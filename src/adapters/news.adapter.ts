import { GetNewsResponse } from "../data";
import { NewsModel } from "../models";

function replaceHtmlEntities(s: string) {
  s.replace(
    /&([a-z]{1,4});/gi,
    (match) =>
      new DOMParser().parseFromString(match, "text/html").documentElement
        .textContent || ""
  );
  return s;
}

export function adaptGetNewsResponse(response: GetNewsResponse): NewsModel[] {
  return response.map(({ id, popularity, timestamp, title }) => ({
    id,
    title: replaceHtmlEntities(title),
    popularity: Number(popularity),
    imageUrl:
      "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390",
    date: new Date(timestamp)
  }));
}
