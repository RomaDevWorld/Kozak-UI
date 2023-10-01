import PartialGuild from '@/types/PartialGuild'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AddBotButton from '@/components/buttons/AddBotButton'

const DashboardPage = async () => {
  const response = await fetch(process.env.APIURL + '/guilds/', { headers: { Cookie: `connect.sid=${cookies().get('connect.sid')?.value}` }, next: { revalidate: 60 } })
  if (!response.ok) return
  const guilds: PartialGuild[] = await response.json()

  return (
    <div className="p-5 flex flex-col w-full h-full items-center gap-5">
      <h1 className="font-bold text-3xl text-center">Servers</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center w-[95vw] bg-slate-400 p-5 rounded-lg">
        {guilds.map((guild) => (
          <div key={guild.id} className="flex rounded-md p-5 bg-slate-500 w-[250px] h-[250px]">
            <Link href={`/dashboard/${guild.id}`} className="flex justify-center flex-col items-center">
              <Image src={guild.icon !== null ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : '/discord.svg'} alt="Guild icon" width={200} height={200} className="rounded-lg object-cover" />
              <h1 className="text-2xl font-bold text-center">{guild.name}</h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>{`Don't see your guilds? Try adding the bot to your server!`}</h2>
        <AddBotButton />
      </div>
    </div>
  )
}

export default DashboardPage
