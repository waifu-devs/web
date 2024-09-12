
export const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://api.waifu.dev" : "http://localhost:8787"

export const fetcher = process.env.API ?
  // @ts-expect-error
  (input: RequestInfo | URL, init?: RequestInit) => process.env.API.fetch(new Request(input, init)) :
  (input: RequestInfo | URL, init?: RequestInit) => fetch(input, { ...init })
