import { INTERNAL_API_BASE_URL } from "@/lib/api"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const runtime = "edge"

export default async function Auth() {
  const res = await fetch(`${INTERNAL_API_BASE_URL}/user`, {
    headers: {
      Cookie: cookies().toString()
    }
  })
  if (!res.ok) {
    return redirect("/auth/github")
  }
  const data = await res.json()
  return (<>
    <h1>Auth</h1>
    <p>user id: {data.user.id}</p>
    <p>github id: {data.user.githubId}</p>
    <p>github username: {data.user.githubUsername}</p>
  </>)
}
