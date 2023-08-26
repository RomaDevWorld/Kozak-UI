import PartialChannel from '@/types/PartialChannel'
import axios from 'axios'
import { cookies } from 'next/headers'

const fetchGuildModules = async (guildId: string) => {
  const { data } = await axios.get<PartialChannel[]>(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/channels`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` } })

  return data
}

export default fetchGuildModules
