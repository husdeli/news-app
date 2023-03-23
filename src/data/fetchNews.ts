import { APP_CONFIG } from "../config";

export interface NewsDto {
  id: string;
  title: string;
  popularity: string;
  timestamp: string;
}

export type GetNewsResponse = NewsDto[];

export function fetchNews(): Promise<GetNewsResponse> {
  return fetch(`${APP_CONFIG.baseUrl}/news`).then((res) => res.json());
}
