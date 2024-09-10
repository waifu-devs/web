import { API_BASE_URL } from "@/lib/api"
import { NextResponse } from "next/server"

export async function GET() {
	return NextResponse.redirect(new URL(`${API_BASE_URL}/auth/github`), 303)
}
