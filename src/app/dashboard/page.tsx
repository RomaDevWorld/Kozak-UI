import PartialGuild from '@/types/PartialGuild'
import axios from 'axios'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const DashboardPage = async () => {
  const cookie = cookies().get('connect.sid') as RequestCookie
  const { data: guilds } = await axios.get<PartialGuild[]>(process.env.NEXT_PUBLIC_APIURL + '/guilds/', {
    headers: {
      Cookie: `connect.sid=${cookie.value}`,
    },
  })

  return (
    <div>
      <h1>Please select a Guild</h1>
      <div className="grid">
        {guilds.map((guild) => (
          <div key={guild.id} className="flex flex-col w-full h-full">
            <Link href={`/dashboard/${guild.id}`}>
              <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Guild icon" width={200} height={200} className="rounded-lg" />
              <h1 className="text-2xl font-bold">{guild.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
