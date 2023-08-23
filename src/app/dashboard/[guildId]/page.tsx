import PartialGuild from '@/types/PartialGuild'
import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'
import Image from 'next/image'

const GuildOverviewPage = async ({ params }: { params: { guildId: string } }) => {
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
    </>
  )
}

export default GuildOverviewPage
