import PrivatesLobbySelector from '@/components/selectors/PrivatesLobbySelector'
import fetchGuildChannels from '@/utils/api/fetchGuildChannels'
import fetchGuildModules from '@/utils/api/fetchGuildModules'
import React from 'react'

const PrivatesModulePage = async ({ params }: { params: { guildId: string } }) => {
  const modules = await fetchGuildModules(params.guildId)
  const channels = await fetchGuildChannels(params.guildId)

  return (
    <div className="container">
      <section className="section">
        <h1 className="text-xl font-bold uppercase mb-3">private channels lobby</h1>
        <PrivatesLobbySelector channels={channels} modules={modules} />
        <p className="mt-2 font-bold">ⓘ After joining this channel, bot will automatically create a new private channel</p>
      </section>
    </div>
  )
}

export default PrivatesModulePage
