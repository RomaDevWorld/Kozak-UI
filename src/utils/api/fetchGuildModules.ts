import { Modules } from '@/types/Modules'
import { cookies } from 'next/headers'

const fetchGuildModules = async (guildId: string) => {
  const response = await fetch(`${process.env.APIURL}/guilds/${guildId}/admin/modules`, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, cache: 'no-store' })

  if (!response.ok) throw new Error(response.statusText)

  const data = await response.json()

  return data as Modules
}

export default fetchGuildModules
