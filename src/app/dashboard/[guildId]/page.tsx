import React from 'react'
import GuildOverviewTile from '@/components/GuildOverviewTile'

const GuildOverviewPage = async ({ params }: { params: { guildId: string } }) => {
  const guildId = params.guildId

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-3">Guild Overview</h1>
      <h3 className="text-center text-2xl mb-3">Configure modules</h3>
      <div className="flex flex-wrap gap-4 justify-center items-center w-screen p-5 rounded-lg">
        <GuildOverviewTile icon="/radio.svg" label="Logging" href={guildId + `/modules/logging`} />
        <GuildOverviewTile icon="/monitor.svg" label="Counter" href={guildId + `/modules/counter`} />
        {/* <GuildOverviewTile label="Tickets" href={guildId + `/modules/tickets`} /> */}
        <GuildOverviewTile icon="/users.svg" label="Auto roles" href={guildId + `/modules/auto-roles`} />
        <GuildOverviewTile icon="/bar-chart-2.svg" label="Leveling" href={guildId + `/modules/leveling`} />
        <GuildOverviewTile icon="/mic.svg" label="Privates" href={guildId + `/modules/privates`} />
        <GuildOverviewTile icon="/star.svg" label="Starboard" href={guildId + `/modules/starboard`} />
      </div>
    </>
  )
}

export default GuildOverviewPage
