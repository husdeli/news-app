import { useQuery } from "@tanstack/react-query";
import { adaptGetNewsResponse } from "../adapters";
import { fetchNews } from "../data";

export function useNews() {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews().then(adaptGetNewsResponse)
  });

  // Sort without mutating the original array
  const popularNews = [...(data || [])].sort(
    (a, b) => b.popularity - a.popularity
  );
  const hotNews = [...(data || [])].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const mostPopularNews = popularNews[0] || null;
  const restNews = popularNews.slice(1, popularNews.length);

  return {
    mostPopularNews,
    restNews,
    hotNews
  };
}
