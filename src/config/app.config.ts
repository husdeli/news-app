const API_PROTOCOL: "http" | "https" =
  (import.meta.env.VITE_API_PROTOCOL as "http" | "https") || "http";
const API_HOST = import.meta.env.VITE_API_HOST || "localhost";
const API_PORT = parseInt(import.meta.env.VITE_API_PORT || "8080", 10);

export const APP_CONFIG = {
  protocol: API_PROTOCOL,
  host: API_HOST,
  port: API_PORT,
  baseUrl: `${API_PROTOCOL}://${API_HOST}:${API_PORT}`
};
