import PartialGuild from '@/types/PartialGuild'
import { cookies } from 'next/headers'

const fetchGuild = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${id}`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 10 } })

  if (!response.ok) throw new Error(response.statusText)

  const data = await response.json()

  return data as PartialGuild
}

export default fetchGuild
