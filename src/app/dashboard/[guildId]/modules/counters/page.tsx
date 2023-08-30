import CounterChannelSelector from '@/components/selectors/CounterChannelSelector'
import CounterNameInput from '@/components/text-inputs/CounterNameInput'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const CountersModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)

  return (
    <div className="container flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold text-center">Set counter channel</h1>
        <CounterChannelSelector channels={channels} modules={modules} />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">Set channel name</h1>
        <CounterNameInput modules={modules} />
      </div>
    </div>
  )
}

export default CountersModulePage
