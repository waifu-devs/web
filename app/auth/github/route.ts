import { API_BASE_URL } from "@/lib/api"
import { cookies } from "next/headers"

export const runtime = "edge"

export function GET() {
	return fetch(`${API_BASE_URL}/auth/github`, {
		headers: {
			Cookie: cookies().toString()
		}
	})
}
