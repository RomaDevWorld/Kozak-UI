import PartialGuild from '@/types/PartialGuild'
import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'
import Image from 'next/image'
import GuildOverviewTile from '@/components/GuildOverviewTile'

const GuildOverviewPage = async ({ params }: { params: { guildId: string } }) => {
  const guildId = params.guildId

  const { data } = await axios.get<PartialGuild>(process.env.NEXT_PUBLIC_APIURL + '/guilds/' + params.guildId, { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` } })

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-3">Guild Overview</h1>
      <div className="flex flex-col gap-10 p-3 items-center md:flex-row md:justify-center">
        <div className="relative w-[200px] h-[200px]">
          <Image src={`https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png`} alt="Guild icon" fill />
        </div>
        <div className="flex flex-col text-2xl">
          <h2>{data.name}</h2>
        </div>
      </div>
      <h3 className="text-center text-2xl mb-3">Configure modules</h3>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center">
        <GuildOverviewTile label="Logging" href={guildId + `/modules/logging`} />
        <GuildOverviewTile label="Counters" href={guildId + `/modules/counters`} />
        <GuildOverviewTile label="Tickets" href={guildId + `/modules/tickets`} />
        <GuildOverviewTile label="Auto roles" href={guildId + `/modules/auto-roles`} />
        <GuildOverviewTile label="XP" href={guildId + `/modules/xp`} />
      </div>
    </>
  )
}

export default GuildOverviewPage
