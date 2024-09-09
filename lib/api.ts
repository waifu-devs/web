
export const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://api.waifu.dev" : "http://localhost:3001"

export const INTERNAL_API_BASE_URL = process.env.NODE_ENV === "production" ? "http://api.railway.internal" : "http://localhost:3001"
