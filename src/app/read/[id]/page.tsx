import { redirect } from 'next/navigation'

export default async function ReadRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  redirect(`/library/read/${id}`)
}
