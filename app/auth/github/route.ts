
const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://api.waifu.dev" : "http://localhost:8787"

export function GET() {
	return Response.redirect(`${API_BASE_URL}/auth/github`)
}
