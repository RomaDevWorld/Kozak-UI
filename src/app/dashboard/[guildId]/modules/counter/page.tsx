import CounterChannelSelector from '@/components/selectors/CounterChannelSelector'
import CounterNameInput from '@/components/text-inputs/CounterNameInput'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const CountersModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)

  return (
    <div className="container">
      <section className="section flex flex-col gap-5">
        <div className="flex gap-1 flex-col">
          <h1 className="text-2xl font-bold uppercase">Set counter channel</h1>
          <p>{`Select a channel to update it's name`}</p>
          <CounterChannelSelector channels={channels} modules={modules} />
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text-2xl font-bold uppercase">Set channel name</h1>
          <p>{`Set the channel's name`}</p>
          <CounterNameInput modules={modules} />
          <h2 className="mt-3 font-bold">HINT:</h2>
          <h3 className="flex flex-col gap-2">
            <p>
              <code>ON</code> - will display current online on the server (excluding bots)
            </p>
            <p>
              <code>ALL</code> - will display amount of members on the server (excluding bots)
            </p>
            <p>
              <code>MEM</code> - will display amount of members on the server (excluding bots)
            </p>
            <p>
              <code>BOT</code> - will display amount of bots on the server
            </p>
            <p>
              <code>VC</code> - will display amount of members that are currently in a voice channel (excluding bots)
            </p>
            <p className="mt-2 font-bold">ⓘ Channel names can only be updated once in 5 minute (Discord API limits)</p>
          </h3>
        </div>
      </section>
    </div>
  )
}

export default CountersModulePage
