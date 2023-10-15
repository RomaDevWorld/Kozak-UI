import StarboardChannelSelector from '@/components/selectors/StarboardChannelSelector'
import StarboardThreshold from '@/components/selectors/numbers/StarboardThreshold'
import StarboardModuleToggle from '@/components/toggles/StarboardModuleToggle'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const page = async ({ params }: { params: { guildId: string } }) => {
  const guildId = params.guildId

  const channels = await fetchGuildChannels(guildId)
  const modules = await fetchGuildModules(guildId)

  return (
    <div className="container">
      <section className="section flex items-center gap-4">
        <h1 className="text-xl font-bold uppercase">status:</h1>
        <StarboardModuleToggle modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase mb-3">starboard channel</h1>
        <p>Select a channel to starboard messages to</p>
        <StarboardChannelSelector channels={channels} modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase mb-3">threshold</h1>
        <p>Set minimum reactions required on message for it to be sent to starboard</p>
        <StarboardThreshold modules={modules} />
      </section>
      <section className="section">
        <h1 className="text-xl font-bold uppercase mb-3">custom emoji</h1>
        <p>
          For now, you can only set custom emoji using in-app command <code>/config starboard emoji</code>
        </p>
      </section>
    </div>
  )
}

export default page
