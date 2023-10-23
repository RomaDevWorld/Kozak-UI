import PartialGuild from '@/types/PartialGuild'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AddBotButton from '@/components/buttons/AddBotButton'

const DashboardPage = async () => {
  const response = await fetch(process.env.APIURL + '/guilds/', { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 5 } })
  if (!response.ok) return
  const guilds: PartialGuild[] = await response.json()

  return (
    <div className="p-5 flex flex-col w-full h-full items-center gap-5">
      <h1 className="font-bold text-3xl text-center">Servers</h1>
      {guilds.map((guild) => (
        <div key={guild.id} className="w-1/2">
          <Link href={`/dashboard/${guild.id}`} className="flex flex-col items-center justify-center gap-3 bg-slate-500 p-2 rounded-md w-full md:flex-row">
            <div className="relative w-40 h-40 md:w-24 md:h-24">
              <Image src={guild.icon !== null ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : '/meh.svg'} alt="Guild icon" fill={true} className="rounded-lg object-cover flex-1" />
            </div>
            <h1 className="text-2xl font-bold text-center flex-1">{guild.name}</h1>
          </Link>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2">
        <h2>{`Don't see your guilds? Try adding the bot to your server!`}</h2>
        <AddBotButton />
      </div>
    </div>
  )
}

export default DashboardPage
