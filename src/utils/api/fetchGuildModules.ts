import { Modules } from '@/types/Modules'
import axios from 'axios'
import { cookies } from 'next/headers'

const fetchGuildModules = async (guildId: string) => {
  const { data } = await axios.get<Modules>(`${process.env.NEXT_PUBLIC_APIURL}/guilds/${guildId}/admin/modules`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` } })

  return data
}

export default fetchGuildModules
