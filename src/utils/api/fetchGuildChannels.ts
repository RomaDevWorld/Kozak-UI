import PartialChannel from '@/types/PartialChannel'
import { cookies } from 'next/headers'

const fetchGuildChannels = async (guildId: string) => {
  const response = await fetch(`${process.env.APIURL}/guilds/${guildId}/channels`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 10 } })

  if (!response.ok) throw new Error(response.statusText)

  const data = await response.json()

  return data as PartialChannel[]
}

export default fetchGuildChannels
