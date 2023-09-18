import TicketList from '@/components/lists/TicketList'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import fetchGuildRoles from '@/utils/api/fetchGuildRoles'
import React from 'react'

const page = async ({ params }: { params: { guildId: string } }) => {
  const channels = await fetchGuildChannels(params.guildId)
  const roles = await fetchGuildRoles(params.guildId)
  const modules = await fetchGuildModules(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <h1>List of active tickets on this server</h1>
      <TicketList channels={channels} roles={roles} modules={modules} />
    </div>
  )
}

export default page
