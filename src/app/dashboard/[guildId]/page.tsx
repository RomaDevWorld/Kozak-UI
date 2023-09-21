import React from 'react'
import GuildOverviewTile from '@/components/GuildOverviewTile'

const GuildOverviewPage = async ({ params }: { params: { guildId: string } }) => {
  const guildId = params.guildId

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-3">Guild Overview</h1>
      <h3 className="text-center text-2xl mb-3">Configure modules</h3>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center">
        <GuildOverviewTile label="Logging" href={guildId + `/modules/logging`} />
        <GuildOverviewTile label="Counter" href={guildId + `/modules/counter`} />
        {/* <GuildOverviewTile label="Tickets" href={guildId + `/modules/tickets`} /> */}
        <GuildOverviewTile label="Auto roles" href={guildId + `/modules/auto-roles`} />
        <GuildOverviewTile label="Leveling" href={guildId + `/modules/leveling`} />
      </div>
    </>
  )
}

export default GuildOverviewPage
