
export const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://api.waifu.dev" : "http://localhost:8787"

// @ts-expect-error
export const fetcher = process.env.NODE_ENV === "production" ? process.env.API.fetch : fetch
