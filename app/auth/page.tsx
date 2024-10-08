import { API_BASE_URL, fetcher } from "@/lib/api"
import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

export const runtime = "edge"

export default async function Auth() {
  const res = await fetcher(`${API_BASE_URL}/user`, {
    headers: {
      Cookie: cookies().toString()
    }
  })
  if (!res.ok) {
    return redirect("/auth/github")
  }
  const data = await res.json()
  return (<>
    <Link href="/">Go back to home</Link>
    <h1>Auth</h1>
    <p>user id: {data.user.id}</p>
    <p>github id: {data.user.githubId}</p>
    <p>github username: {data.user.githubUsername}</p>
  </>)
}
