import { API_BASE_URL } from "@/lib/api"

export function GET() {
	return Response.redirect(`${API_BASE_URL}/auth/github`)
}
