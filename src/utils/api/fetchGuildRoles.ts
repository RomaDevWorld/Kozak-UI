import PartialRole from '@/types/PartialRole'
import { cookies } from 'next/headers'

const fetchGuildRoles = async (guildId: string) => {
  const response = await fetch(`${process.env.APIURL}/guilds/${guildId}/roles`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 10 } })

  if (!response.ok) throw new Error(response.statusText)

  const data = await response.json()

  return data as PartialRole[]
}

export default fetchGuildRoles
