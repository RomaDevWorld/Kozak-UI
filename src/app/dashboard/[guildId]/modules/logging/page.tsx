import LogchannelSelector from '@/components/selectors/LogchannelSelector'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const LoggingModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Set log channel</h1>
      <LogchannelSelector channels={channels} modules={modules} />
    </div>
  )
}

export default LoggingModulePage
